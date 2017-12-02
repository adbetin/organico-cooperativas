# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import redirect
from django.shortcuts import render
from rest_framework.decorators import api_view

from productor.serializers import ProductoSerializer
from productor.views import modeloJSON
from productor.models import producto

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