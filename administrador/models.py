from __future__ import unicode_literals
from cooperativa.models import Cooperativa
from productor.models import Productor
from datetime import datetime

from django.db import models

# Create your models here.
class Tema(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(null=True, blank=True,max_length=700)

class Foro(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=700)
    cooperativa = models.ForeignKey(Cooperativa)
    tema = models.ForeignKey(Tema)
    fecha_cierre = models.DateTimeField(null=True, blank=True )
    usuario = models.IntegerField(null=True, blank=True , default=1) #Modificar esta campo cuando se encuentre habilitado lo del login a la plataforma
    estado = models.CharField(max_length=50, null=True, blank=True)

class Respuesta(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=700)
    productor = models.ForeignKey(Productor)
    foro = models.ForeignKey(Foro)
    fecha = models.DateTimeField(null=True, default=datetime.now(), blank=True)
