from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from productor.models import Productor, TipoDocumento, EnvioCorreos, producto, Oferta
from cooperativa.models import Cooperativa
from productor.serializers import ProductorSerializer, SimpleProductorSerializer, OfertaSerializer, ProductoSerializer
from django.core.mail import send_mail
from random import choice
import time
import json

email_template = """

Alguien quiere comunicarse contigo

%s te envio un mensaje:
%s

Gracias por usar nuestra aplicacion

Para acceder a la aplicacion haga click http://organico-cooperativas.herokuapp.com
"""

newuser_template = """

Usuario creado con exito

Usuario: %s
Password: %s

Gracias por usar nuestra aplicacion

Para acceder a la aplicacion haga click http://organico-cooperativas.herokuapp.com
"""


# Create your views here.

def productorAdmin(request):
    context = {}
    return render(request, 'productor.html', context)


def activarCorreos(request):
    context = {}
    return render(request, 'productor.html', context)


def productorLista(request):
    context = {}
    return render(request, 'productor-lista.html', context)


def productorDetail(request, id):
    productor = get_object_or_404(Productor, id=id)
    context = {'productor': productor}
    return render(request, 'productor-detalle.html', context)


def productorProductosDetail(request):
    context = {}
    return render(request, 'productor-detalle.html', context)


def contrasena_aleatoria():
    longitud = 10
    valores = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    p = ""
    p = p.join([choice(valores) for i in range(longitud)])
    return p


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

            nUsuario = User()
            nUsuario.username = data['email']
            nUsuario.first_name = data['nombre']
            nUsuario.last_name = ""
            nUsuario.email = data['email']
            nUsuario.is_active = False
            #se crea la contrasena
            contrase = contrasena_aleatoria()
            nUsuario.set_password(contrase)
            nUsuario.save()

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
                fincaCertificada = data['fincaCertificada'],
                productosOrganicos = data['productosOrganicos'],
                email = data['email'],
                nombreFinca = data['nombreFinca'],
                usuario=nUsuario
            )
            productor.save()

            send_mail(
                'Usuario nuevo Fresh Food',
                newuser_template % (data['email'], contrase),
                'no-reply@organico-cooperativas.com',
                [data['email']],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', ])
def simpleProductoresList(request):
    if (request.method == 'GET'):
        productores = Productor.objects.all()
        serializer = SimpleProductorSerializer(productores, many=True)
        return modeloJSON(serializer.data)


@csrf_exempt
@api_view(['GET'])
def productorGet(request, id):
    productor = Productor.objects.get(pk=id)
    serializer = ProductorSerializer(productor)
    return modeloJSON(serializer.data)


@csrf_exempt
def productorEditar(request, id):
    respuesta = False
    if request.method == 'POST':
        productorPost = decode(request.body)
        productor = Productor.objects.get(pk=id)
        productor.nombre = productorPost["nombre"]
        productor.descripcion = productorPost["descripcion"]
        productor.direccion = productorPost["direccion"]
        productor.documento = productorPost["documento"]
        productor.foto = productorPost["foto"]
        productor.latitud = float(productorPost["latitud"])
        productor.longitud = float(productorPost["longitud"])
        productor.aprobado = productorPost["aprobado"];

        productor.cooperativa = Cooperativa.objects.get(pk=productorPost["id_cooperativa"])
        productor.tipo_documento = TipoDocumento.objects.get(pk=productorPost["id_tipo_documento"])

        productor.save()
        respuesta = True
        return modeloJSON(respuesta)
    return modeloJSON(respuesta)


@csrf_exempt
@api_view(['POST'])
def activarCorreo(request):
    data = JSONParser().parse(request)
    estado = EnvioCorreos.objects.all()
    print(len(estado))
    if(len(estado) > 0):
        estado = estado[0]
    else:
        EnvioCorreos.objects.create(activo=data['activar'])
        return Response("Estado modificado correctamente", status=status.HTTP_201_CREATED)
    estado.activo = data['activar']
    estado.save()
    return Response("Estado modificado correctamente", status=status.HTTP_201_CREATED)


@csrf_exempt
@api_view(['GET'])
def verificarEstadoCorreos(request):
    estado = EnvioCorreos.objects.all()
    if(len(estado)>0):
        print(estado)
        estado = estado[0]
        respuesta = ""
        if(estado.activo == True):
            respuesta = True
        else:
            respuesta = False
        return Response(respuesta, status=status.HTTP_200_OK)
    else:
        estado = False
        return Response(estado, status=status.HTTP_200_OK)
    return Response("No se puede obtener el estado del envio de correos", status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def enviarCorreo(request):
    data = JSONParser().parse(request)
    if(data['message'] and data['sender'] and data['receiver']):
        message = data['message']
        sender = data['sender']
        receiver = data['receiver']
        send_mail(
            'Alguien quiere comunicarse contigo',
            email_template % (sender, message),
            'no-reply@organico-cooperativas.com',
            [receiver],
            fail_silently=False,
        )
        return Response("Correo enviado satisfactoriamente", status=status.HTTP_201_CREATED)
    return Response("Error en el envio de correo", status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET'])
def recibirProductos(request):
    if (request.method == 'GET'):
        ofertas = Oferta.objects.all()
        #ofertasString = [ofertas.as_dict() for obj in ofertas]
        if(len(ofertas)):
            return Response(OfertaSerializer(ofertas, many=True).data, status=status.HTTP_200_OK)
    return Response("[]", status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET'])
def listarProductos(request):
    if (request.method == 'GET'):
        productos = producto.objects.all()
        #ofertasString = [ofertas.as_dict() for obj in ofertas]
        if(len(productos)):
            return Response(ProductoSerializer(productos, many=True).data, status=status.HTTP_200_OK)
    return Response("[]", status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET'])
def obtenerUsuarioPorUserId(request, id):
    if (request.method == 'GET'):
        usuario = User.objects.get(pk=id)
        productor = get_object_or_404(Productor, usuario=usuario)
        return Response(ProductorSerializer(productor).data, status=status.HTTP_200_OK)
    return Response("[]", status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['POST'])
def enviarProductos(request):
    if (request.method == 'POST'):
        print(request.data)
        data = json.loads(json.dumps(request.data, ensure_ascii=False))
        print(data)
        if(data['productos'] and data['productor']):
            productorPost = data['productor']
            productor = get_object_or_404(Productor, id=productorPost['id'])
            productosPost = data['productos']
            pr = None
            if(hasattr(productosPost, 'id')):
                pr = get_object_or_404(producto, id=productosPost['id'])
            if (pr):
                productosList = pr
            else:
                pr = producto()
                pr.nombre = productosPost['nombre']
                pr.descripcion = productosPost['descripcion']
                pr.precio = productosPost['precio']
                pr.imagen = productosPost['imagen']
                pr.unidadMedida = productosPost['unidadMedida']
                pr.stock = 0
                pr.save()
                productosList = pr
            if(productor and productosList):
                oferta = Oferta()
                oferta.fecha = time.strftime("%Y-%m-%d")
                oferta.productor = productor
                oferta.cantidad = data['cantidad']
                oferta.productos = productosList
                oferta.save()
                print("***********************************************")
                print(data['cantidad'])
                print("***********************************************")
                return Response("Productos guardados satisfactoriamente", status=status.HTTP_201_CREATED)
    return Response("Error en el envio de productos", status=status.HTTP_400_BAD_REQUEST)

def decode(data):
    print(data)
    new_data = data.decode("utf-8", "strict")

    return json.loads(new_data)