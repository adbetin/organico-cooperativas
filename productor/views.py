from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from productor.models import Productor, TipoDocumento
from cooperativa.models import Cooperativa
from productor.serializers import ProductorSerializer

# Create your views here.

def productorAdmin(request):
    context = {}
    return render(request, 'productor.html', context)

def productorLista(request):
    context = {}
    return render(request, 'productor-lista.html', context)

def productorDetail(request, id):
    productor = get_object_or_404(Productor, id=id)
    context = {'productor': productor}
    return render(request, 'productor-detalle.html', context)

class modeloJSON(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(modeloJSON, self).__init__(content, **kwargs)

@api_view(['GET', 'POST', ])
def productoresList(request):
    if (request.method == 'GET'):
        productores = Productor.objects.all()
        serializer = ProductorSerializer(productores, many=True)
        return modeloJSON(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductorSerializer(data=data, many=False, )
        if serializer.is_valid():
            cooperativa = get_object_or_404(Cooperativa, id=data['cooperativa'])
            tipo_documento = get_object_or_404(TipoDocumento, id=data['tipo_documento'])
            productor = Productor(
                nombre=data['nombre'],
                descripcion=data['descripcion'],
                tipo_documento = tipo_documento,
                documento = data['documento'],
                direccion = data['direccion'],
                cooperativa = cooperativa,
                latitud = data['latitud'],
                longitud = data['longitud'],
                foto = data['foto'],
                aprobado = data['aprobado'],
            )
            productor.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['GET'])
def productorGet(request, id):
    productor = Productor.objects.get(pk=id)
    serializer = ProductorSerializer(productor)
    return modeloJSON(serializer.data)