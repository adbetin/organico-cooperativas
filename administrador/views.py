from django.shortcuts import get_object_or_404, render, get_list_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from cooperativa.models import Cooperativa
from administrador.models import Tema,Foro,Respuesta
from productor.models import Productor
from administrador.serializers import TemaSerializer,ForoSerializer, RespuestaSerializer
from datetime import datetime

# Create your views here.

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