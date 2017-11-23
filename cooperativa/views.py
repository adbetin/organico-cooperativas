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

# Create your views here.

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
        print(request.body)
        cooperativaPost = JSONParser().parse(request)
        print(cooperativaPost)
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
    servicio = Servicio.objects.all()
    #servicio = get_object_or_404(Servicio, cooperativa=cooperativa_id)
    context = {'servicio': servicio}
    return render(request, 'cooperativas.html', context)


@csrf_exempt
def serviciosList(request, cooperativa_id):
    if (request.method == 'GET'):
        servicios = get_list_or_404(Servicio, cooperativa=cooperativa_id)
        #servicios = Servicio.objects.all()
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
    anio = datetime.now().year                  #Año actual
    semana = datetime.now().strftime("%V")      #Semana del año actual
    return _diasRepartoGet(request, cooperativa_id, anio, semana)

@csrf_exempt
@api_view(['GET'])
def _diasRepartoGet(request, cooperativa_id, anio, semana):
    if (request.method == 'GET'):
        diasReparto = get_list_or_404(DiasReparto, cooperativa=cooperativa_id, anio = anio, semana = semana)
        serializer = DiasRepartoSerializer(diasReparto, many=True)
        return modeloJSON(serializer.data)


@csrf_exempt
def actualizarDiaReparto(cooperativa_id, anio, semana, dia, activo):
    respuesta = False
    diaReparto = DiasReparto.objects.get_or_create(cooperativa_id=cooperativa_id, anio=anio, semana=semana, dia=dia)
    diaReparto.activo=activo
    diaReparto.save()
    respuesta = True
    return respuesta

@csrf_exempt
def actualizarDiasReparto(request):
    respuesta = False
    if (request.method == 'POST'):

        #Obtiene el año y la semana actual
        anio = datetime.now().year  # Año actual
        semana = datetime.now().strftime("%V")  # Semana del año actual

        #carga los datos enviados
        diasReparto = decode(request.body)

        #carga la cooperativa que se va a actualizar
        cooperativa = diasReparto['cooperativa']

        #actualiza el estado de cada día
        actualizarDiaReparto(cooperativa, anio, semana, 1, diasReparto['lunes'])
        actualizarDiaReparto(cooperativa, anio, semana, 2, diasReparto['martes'])
        actualizarDiaReparto(cooperativa, anio, semana, 3, diasReparto['miercoles'])
        actualizarDiaReparto(cooperativa, anio, semana, 4, diasReparto['jueves'])
        actualizarDiaReparto(cooperativa, anio, semana, 5, diasReparto['viernes'])
        actualizarDiaReparto(cooperativa, anio, semana, 6, diasReparto['sabado'])
        actualizarDiaReparto(cooperativa, anio, semana, 7, diasReparto['domingo'])

        respuesta = True
    return modeloJSON(respuesta)


def decode(data):
    new_data = data.decode("utf-8", "strict")

    return json.loads(new_data)