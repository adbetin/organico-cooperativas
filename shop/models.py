# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from productor.models import producto
from django.contrib.auth.models import User
from django.db import models

# from django.db import models

# Create your models here.

class Compra(models.Model):
    fecha = models.DateField()
    usuario = models.ForeignKey(User, blank=False, null=False, unique=False)
    tarjeta = models.CharField(max_length=19)
    proveedorTarjeta = models.CharField(max_length=50)
    direccionEntrega = models.CharField(max_length=200)
    telefonoContacto = models.CharField(max_length=50)

    def __unicode__(self):
        return self.usuario.email

    def __str__(self):
        return 'Compra'


class Item(models.Model):
    cantidad = models.IntegerField()
    producto = models.ForeignKey(producto, blank=False, null=False, unique=False)
    compra = models.ForeignKey(Compra, blank=False, null=False, unique=False)

