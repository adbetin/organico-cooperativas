from django.shortcuts import get_object_or_404, render, get_list_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from cooperativa.models import Cooperativa
from cooperativa.serializers import CooperativaSerializer

# Create your views here.

def cooperativasAdmin(request):
    context = {}
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