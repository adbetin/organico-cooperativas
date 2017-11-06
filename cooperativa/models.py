from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Cooperativa(models.Model):
    nombre = models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550)
    zona = models.CharField(max_length=70)
    responsable = models.CharField(max_length=70)
    nit = models.CharField(max_length=70)
    correo = models.CharField(max_length=70)
    telefono = models.CharField(max_length=70)
    direccion = models.CharField(max_length=255)
    latitud = models.FloatField(blank=True, null=True)
    longitud = models.FloatField(blank=True, null=True)

    class Meta:
        verbose_name = 'Cooperativa'
        verbose_name_plural = 'Cooperativas'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre

class Servicio(models.Model):
    cooperativa = models.ForeignKey(Cooperativa)
    titulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=550)
    foto = models.TextField()

    class Meta:
        verbose_name = 'Servicio'
        verbose_name_plural = 'Servicios'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre