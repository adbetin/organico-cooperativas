from django.shortcuts import get_object_or_404, render, get_list_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from cooperativa.models import Cooperativa, Servicio
from cooperativa.serializers import CooperativaSerializer, ServicioSerializer

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
@api_view(['POST'])
def guardarServicio(request):
    respuesta = False
    if (request.method == 'POST'):
        servicioPost = json.loads(request.body)
        servicio = Servicio.objects.create(  cooperativa=servicioPost["cooperativa"],
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
    servicio = get_object_or_404(Servicio, cooperativa=cooperativa_id)
    context = {'servicio': servicio}
    return render(request, 'cooperativas.html', context)


@csrf_exempt
@api_view(['GET'])
def serviciosList(request, cooperativa_id):
    if (request.method == 'GET'):
        servicios = get_object_or_404(Servicio, cooperativa=cooperativa_id)
        serializer = CooperativaSerializer(servicios, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
@api_view(['GET'])
def serviciosGet(request, cooperativa_id):
    servicio = get_object_or_404(Servicio, id=cooperativa_id)
    serializer = ServicioSerializer(servicio)
    return modeloJSON(serializer.data)

