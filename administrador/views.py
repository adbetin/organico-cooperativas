from django.shortcuts import get_object_or_404, render, get_list_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from cooperativa.models import Cooperativa
from administrador.models import Tema,Foro,Respuesta
from productor.models import Productor,Oferta
from administrador.serializers import TemaSerializer,ForoSerializer, RespuestaSerializer, OfertaSerializer
import time, datetime, locale
from django.core.mail import send_mail

# Create your views here.
ofertas_template = """

La oferta de productos realizada por usted fue %s por el administrador de la cooperativa, los detalles de la propuesta se encuentran a continuacion:
Fecha de solicitud: %s
Producto: %s
Cantidad ofertada: %s
Cantidad aprobada[Solo para estado aprobado]: %s
Precio aprobado[Solo para estado aprobado]: %s
Inicio vigencia[Solo para estado aprobado]: %s
Fin vigencia[Solo para estado aprobado]: %s
Motivo del rechazo[Solo para estado rechazada]: %s

Gracias por usar nuestra aplicacion

Para acceder a la aplicacion haga click http://organico-cooperativas.herokuapp.com
"""

def foroAdmin(request):
    context = {}
    return render(request, 'administrador.html', context)

class modeloJSON(HttpResponse):
	def __init__(self, data, **kwargs):
		content = JSONRenderer().render(data)
		kwargs['content_type'] = 'application/json'
		super(modeloJSON, self).__init__(content, **kwargs)

@csrf_exempt
def temasForoList(request):
    if (request.method == 'GET'):
        temas = Tema.objects.all()
        serializer = TemaSerializer(temas, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
def guardarForo(request):
    respuesta = False
    if (request.method == 'POST'):
        foroPost = json.loads(request.body)
        foro = Foro.objects.create(nombre=foroPost["nombre"],
                                     descripcion=foroPost["descripcion"],
                                     fecha_cierre=foroPost["fechacierre"],
                                     usuario=1,#modificar cuando este listo la funcionalidad del login
                                     cooperativa=Cooperativa.objects.get(pk=foroPost["cooperativa"]),
                                     tema=Tema.objects.get(pk=foroPost["tema"])
                                   );
        foro.save()
        respuesta = True
    return modeloJSON(respuesta)

@csrf_exempt
def foroList(request):
    if (request.method == 'GET'):
        foros = Foro.objects.all()
        serializer = ForoSerializer(foros, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
def editarForo(request):
    respuesta = False
    if (request.method == 'POST'):
        foroPost = JSONParser().parse(request)

        foro = Foro.objects.get(id=foroPost['id'])
        foro.nombre = foroPost["nombre"]
        foro.descripcion = foroPost["descripcion"]

        foro.cooperativa = Cooperativa.objects.get(pk=foroPost["cooperativa"])
        foro.fecha_cierre = foroPost["fechacierre"]
        foro.tema = Tema.objects.get(pk=foroPost["tema"])

        foro.save()
        respuesta = True
    return modeloJSON(respuesta)

@csrf_exempt
@api_view(['GET'])
def foroGet(request, id):
    foro = get_object_or_404(Foro, id=id)
    serializer = ForoSerializer(foro)
    return modeloJSON(serializer.data)

def ForoDetail(request, id):
    foro = get_object_or_404(Foro, id=id)
    context = {'foro': foro}
    return render(request, 'administrador.html', context)

@csrf_exempt
def respuestasForo(request ,id ):
    if (request.method == 'GET'):
        foro = Foro.objects.get(pk=id)
        respuestas = Respuesta.objects.all( ).filter( foro = foro )
        serializer = RespuestaSerializer(respuestas, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
def agregarRespuesta(request):
    respuesta = False
    if (request.method == 'POST'):
        respuestaPost = json.loads(request.body)
        respuesta = Respuesta.objects.create(nombre=respuestaPost["nombre"],
                                             descripcion=respuestaPost["descripcion"],
                                             productor= Productor.objects.get(pk=1),
                                             foro=Foro.objects.get(pk=respuestaPost["id"])
                                            );
        respuesta.save()
        respuesta = True
    return modeloJSON(respuesta)

@csrf_exempt
def ofertasList(request): #Unicamente muestra las solicitudes de esta semana que seran habilitadas la proxima semana
    if (request.method == 'GET'):
        fechas = capturarFechasSemana()

        where = "to_date('%(fecha_inicio)s' , 'YYYY-MM-DD') <= fecha AND to_date('%(fecha_fin)s' , 'YYYY-MM-DD') >= fecha " % \
               {'fecha_inicio': fechas["fechaInicio"], 'fecha_fin': fechas["fechaFin"]}

        ofertas = Oferta.objects.all().filter(estado=1).extra(where=[where]) #Agregar el filtro de fechas por el momento

        serializer = OfertaSerializer(ofertas, many=True)
        return modeloJSON(serializer.data)
        #oferta = [{"id":"1","fechaCreacion":"2017-05-05", "productor":"Rafa medrano Corp","producto":"Tomates","cantidad":"200","precio":"100"}]
        #return modeloJSON( oferta )

def ofertaDetalle(request, id):
    ofertas = Oferta.objects.all().filter(pk=id)  # Agregar el filtro de fechas por el momento
    serializer = OfertaSerializer(ofertas, many=True)
    context = {'oferta': serializer.data}
    return render(request, 'administrador.html', context)

@csrf_exempt
def consultarOferta(request, id):
    if (request.method == 'GET'):
        ofertas = Oferta.objects.all().filter(pk=id)  # Agregar el filtro de fechas por el momento
        serializer = OfertaSerializer(ofertas, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
def fechasRest(request):
    fechas = capturarFechasSemana()
    return modeloJSON(fechas)

@csrf_exempt
def aceptarOferta(request):
    respuesta = False
    if (request.method == 'POST'):
        datosPost = JSONParser().parse(request)

        oferta = Oferta.objects.get(id=datosPost['id'])
        oferta.cantidadEsta = datosPost["cantidad"]
        oferta.precioEsta = datosPost["precio"]
        oferta.estado = 2 #Estado aprobada
        oferta.fechaAprRecha = datetime.datetime.now().date()
        oferta.fechaInicio = datosPost["fechaInicio"]
        oferta.fechaFin = datosPost["fechaFin"]
        oferta.save()

        respuesta = enviarCorreo("APROBADO", 'no-reply@organico-cooperativas.com', oferta.productor.email, "Oferta de producto aprobada", oferta)

    return modeloJSON(respuesta)

@csrf_exempt
def rechazarOferta(request):
    respuesta = False
    if (request.method == 'POST'):
        datosPost = JSONParser().parse(request)

        oferta = Oferta.objects.get(id=datosPost['id'])
        oferta.estado = 3  # Estado rechazada
        oferta.fechaAprRecha = datetime.datetime.now().date()
        oferta.motivoRechazo = datosPost["descripcion"]
        oferta.save()

        respuesta = enviarCorreo("RECHAZADA", '', oferta.productor.email,
                                 "Oferta de producto rechazada", oferta)

    return modeloJSON(respuesta)

def enviarCorreo(mensaje, remitente, destinatario, asunto, oferta ):
    if(mensaje and remitente and destinatario):
        send_mail(
            asunto,
            ofertas_template % (mensaje, oferta.fecha, oferta.productos.nombre, oferta.cantidad, oferta.cantidadEsta, oferta.precioEsta, oferta.fechaInicio,oferta.fechaFin, oferta.motivoRechazo ),
            'no-reply@organico-cooperativas.com',
            [destinatario],
            fail_silently=False,
        )
        return False
    return True

#Funcion para simplificar la gestion de fechas de la semana actual
def capturarFechasSemana( ):
    # Incluir solo las ofertas de la misma semana
    locale.setlocale(locale.LC_ALL, 'Spanish_Spain.1252')
    fechaActual = datetime.datetime.now().date()
    diaActual = datetime.datetime.now().date().strftime('%A')

    fechaInicio = ''
    fechaFin = ''
    if (diaActual == "lunes"):  # Sumarle 6 dias y restarle 0
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=6)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=0)
    if (diaActual == "martes"):  # Sumarle 5 dias y restarle 1
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=5)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=1)
    if (diaActual == "miercoles"):  # Sumarle 4 dias y restarle 2
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=4)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=2)
    if (diaActual == "jueves"):  # Sumarle 3 dias y restarle 3
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=3)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=3)
    if (diaActual == "viernes"):  # Sumarle 2 dias y restarle 4
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=2)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=4)
    if (diaActual == "sabado"):  # Sumarle 1 dias y restarle 5
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=1)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=5)
    if (diaActual == "domingo"):  # Sumarle 0 dias y restarle 6
        fechaFin = datetime.datetime.now().date() + datetime.timedelta(days=0)
        fechaInicio = datetime.datetime.now().date() - datetime.timedelta(days=6)

    #Proxima semana
    fechaInicioNext = fechaInicio+datetime.timedelta(weeks=1)
    fechaFinNext = fechaFin + datetime.timedelta(weeks=1)

    resultado = {'fechaActual' : fechaActual.strftime('%Y-%m-%d'), 'fechaInicio' : fechaInicio,
                 'fechaFin' : fechaFin , 'fechaInicioNext': fechaInicioNext.strftime('%Y-%m-%d'),
                 'fechaFinNext':fechaFinNext.strftime('%Y-%m-%d')}
    return resultado


