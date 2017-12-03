from django.shortcuts import get_object_or_404, render, get_list_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from cooperativa.models import Cooperativa, Servicio, DiasReparto
from cooperativa.serializers import CooperativaSerializer, ServicioSerializer, DiasRepartoSerializer
from datetime import datetime
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

# Create your views here.
from productor.models import Productor


def cooperativasAdmin(request):
    cooperativas = Cooperativa.objects.all()
    context = {'cooperativas': cooperativas}
    return render(request, 'cooperativas.html', context)

class modeloJSON(HttpResponse):
	def __init__(self, data, **kwargs):
		content = JSONRenderer().render(data)
		kwargs['content_type'] = 'application/json'
		super(modeloJSON, self).__init__(content, **kwargs)

@csrf_exempt
def cooperativasList(request):
    if (request.method == 'GET'):
        cooperativas = Cooperativa.objects.all()
        serializer = CooperativaSerializer(cooperativas, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
@api_view(['GET'])
def cooperativasGet(request, id):
    cooperativa = get_object_or_404(Cooperativa, id=id)
    serializer = CooperativaSerializer(cooperativa)
    return modeloJSON(serializer.data)

@csrf_exempt
def guardarCooperativa(request):
    respuesta = False
    if (request.method == 'POST'):
        cooperativaPost = json.loads(request.body)
        cooperativa = Cooperativa.objects.create(nombre=cooperativaPost["nombre"],
                                                 nit=cooperativaPost["nit"],
                                                 descripcion=cooperativaPost["descripcion"],
                                                 zona=cooperativaPost["zona"],
                                                 responsable=cooperativaPost["responsable"],
                                                 correo=cooperativaPost["correo"],
                                                 direccion=cooperativaPost["direccion"],
                                                 telefono=cooperativaPost["telefono"],
                                                 latitud=cooperativaPost["latitud"],
                                                 longitud=cooperativaPost["longitud"],
                                                 );

        cooperativa.save()
        respuesta = True
    return modeloJSON(respuesta)

@csrf_exempt
def guardarServicio(request):
    respuesta = False
    if (request.method == 'POST'):
        servicioPost = decode(request.body)
        cooperativa = get_object_or_404(Cooperativa, id=servicioPost['cooperativa'])
        servicio = Servicio.objects.create(  cooperativa=cooperativa,
                                             titulo=servicioPost["titulo"],
                                             descripcion=servicioPost["descripcion"],
                                             foto=servicioPost["foto"]
                                         );
        servicio.save()
        respuesta = True
    return modeloJSON(respuesta)

@csrf_exempt
def actualizarCooperativa(request):
    respuesta = False
    if (request.method == 'POST'):
        # print(request.body)
        cooperativaPost = JSONParser().parse(request)
        # print(cooperativaPost)
        coop = Cooperativa.objects.get(id=cooperativaPost['id'])
        coop.nombre=cooperativaPost["nombre"]
        coop.nit=cooperativaPost["nit"]
        coop.descripcion=cooperativaPost["descripcion"]
        coop.zona=cooperativaPost["zona"]
        coop.responsable=cooperativaPost["responsable"]
        coop.correo=cooperativaPost["correo"]
        coop.direccion=cooperativaPost["direccion"]
        coop.telefono=cooperativaPost["telefono"]
        coop.latitud=cooperativaPost["latitud"]
        coop.longitud = cooperativaPost["longitud"]
        coop.save()
        respuesta = True
    return modeloJSON(respuesta)

def cooperativasDetail(request, id):
    cooperativa = get_object_or_404(Cooperativa, id=id)
    context = {'cooperativa': cooperativa}
    return render(request, 'cooperativas.html', context)

def serviciosAdmin(request, cooperativa_id):
    cooperativa = get_object_or_404(Cooperativa, id=cooperativa_id)
    servicio = Servicio.objects.get(cooperativa=cooperativa)
    context = {'servicio': servicio}
    return render(request, 'cooperativas.html', context)

def diasRepartoAdmin(request, cooperativa_id):
    cooperativas = get_object_or_404(Cooperativa, id=cooperativa_id)
    #cooperativas = Cooperativa.objects.all()
    context = {'cooperativas': cooperativas}
    return render(request, 'cooperativas.html', context)


@csrf_exempt
def serviciosList(request, cooperativa_id):
    if (request.method == 'GET'):
        servicios = get_list_or_404(Servicio, cooperativa=cooperativa_id)
        serializer = ServicioSerializer(servicios, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
@api_view(['GET'])
def serviciosGet(request, id):
    servicio = get_object_or_404(Servicio, id=id)
    serializer = ServicioSerializer(servicio)
    return modeloJSON(serializer.data)

@csrf_exempt
@api_view(['GET'])
def diasRepartoGet(request, cooperativa_id):
    anio = datetime.now().year                  #Anio actual
    semana = datetime.now().strftime("%V")      #Semana del anio actual
    return _diasRepartoGet(request, cooperativa_id, anio, semana)

@csrf_exempt
@api_view(['GET'])
def _diasRepartoGet(request, cooperativa_id, anio, semana):
    if (request.method == 'GET'):
        try:
            cooperativa = get_object_or_404(Cooperativa, id=cooperativa_id)
            diasReparto = get_list_or_404(DiasReparto, cooperativa=cooperativa, anio = anio, semana = semana)
        except:
            cooperativa = None
            diasReparto = None
        serializer = DiasRepartoSerializer(diasReparto, many=True)
        return modeloJSON(serializer.data)


@csrf_exempt
def actualizarDiaReparto(cooperativa_id, anio, semana, dia, activo):
    respuesta = False
    cooperativa = get_object_or_404(Cooperativa, id=cooperativa_id)
    diaReparto, respuesta = DiasReparto.objects.get_or_create(cooperativa=cooperativa, anio=anio, semana=semana, dia=dia, defaults={ } )
    diaReparto.activo = activo
    diaReparto.save()
    return respuesta

@csrf_exempt
def actualizarDiasReparto(request):
    respuesta = False
    if (request.method == 'POST'):

        #Obtiene el anio y la semana actual
        anio = datetime.now().year  # Anio actual
        semana = datetime.now().strftime("%V")  # Semana del anio actual

        #carga los datos enviados
        diasReparto = decode(request.body)

        #carga la cooperativa que se va a actualizar
        cooperativa = diasReparto['cooperativa']

        #actualiza el estado de cada dia
        actualizarDiaReparto(cooperativa, anio, semana, 1, diasReparto['lunes'])
        actualizarDiaReparto(cooperativa, anio, semana, 2, diasReparto['martes'])
        actualizarDiaReparto(cooperativa, anio, semana, 3, diasReparto['miercoles'])
        actualizarDiaReparto(cooperativa, anio, semana, 4, diasReparto['jueves'])
        actualizarDiaReparto(cooperativa, anio, semana, 5, diasReparto['viernes'])
        actualizarDiaReparto(cooperativa, anio, semana, 6, diasReparto['sabado'])
        actualizarDiaReparto(cooperativa, anio, semana, 7, diasReparto['domingo'])

        respuesta = True

    return modeloJSON(respuesta)

email_announcement_template = """

Administrador envio un mensaje

%s

Gracias por usar nuestra aplicacion

Para acceder a la aplicacion haga click http://organico-cooperativas.herokuapp.com
"""


@csrf_exempt
@api_view(['POST'])
def enviarCorreoAnuncio(request):
    data = request.data
    if(data['message'] and data['subject'] and data['cooperativaId']):
        message = data['message']
        subject = data['subject']
        cooperativaId = data['cooperativaId']

        cooperativa = get_object_or_404(Cooperativa, id=cooperativaId)
        try:
            productores = Productor.objects.filter(cooperativa=cooperativa)
        except:
            productores = []

        for productor in productores:
            if(productor.email is not None):
                send_mail(
                    subject,
                    email_announcement_template % (message),
                    'no-reply@organico-cooperativas.com',
                    [productor.email],
                    fail_silently=False,
                )
        return Response("Correos enviados satisfactoriamente", status=status.HTTP_201_CREATED)
    return Response("Error en el envio de correo", status=status.HTTP_400_BAD_REQUEST)

def decode(data):
    new_data = data.decode("utf-8", "strict")

    return json.loads(new_data)