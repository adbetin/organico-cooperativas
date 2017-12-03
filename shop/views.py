# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import redirect
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

from productor.serializers import ProductoSerializer
from productor.views import modeloJSON
from productor.models import producto
from shop.models import Compra, Item
from django.contrib.auth.models import User
import json
import time

# Create your views here.


def shop(request):
    productos = producto.objects.all()
    context = {'productos': productos}
    return render(request, 'shop-organico.html', context)

def checkout(request):
    return render(request, 'shop-organico.html', {})

@api_view(['GET'])
def productsList(request):
    if (request.method == 'GET'):
        products = producto.objects.all()
        serializer = ProductoSerializer(products, many=True)
        return modeloJSON(serializer.data)
    else:
        return redirect('not_found')

@csrf_exempt
@api_view(['POST'])
def checkoutCompra(request):
    if (request.method == 'POST'):
        data = json.loads(json.dumps(request.data, ensure_ascii=False))
        if(data['usuario'] and data['productos']):
            productos = data['productos']
            fecha = time.strftime("%Y-%m-%d")
            usuario = get_object_or_404(User, id=data['usuario']['usuario'])
            compra = Compra()
            compra.fecha = fecha
            compra.usuario = usuario
            compra.save()
            for prod in productos:
                productoGuardado = get_object_or_404(producto, id=prod['id'])
                if(productoGuardado):
                    item = Item()
                    item.producto = productoGuardado
                    item.compra = compra
                    item.cantidad = prod['cantidad']
                    item.save()
            return Response("Compra guardada satisfactoriamente", status=status.HTTP_201_CREATED)
        return Response("Error en el envio de compra", status=status.HTTP_400_BAD_REQUEST)