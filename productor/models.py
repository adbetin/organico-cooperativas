from django.db import models
from cooperativa.models import Cooperativa
from django.contrib.auth.models import User

# Create your models here.
class EnvioCorreos(models.Model):
    activo = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Envio Correo'

    def __str__(self):
        return '%s' % self.activo

    def __unicode__(self):
        return self.activo

class TipoDocumento(models.Model):
    nombre = models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550)

    class Meta:
        verbose_name = 'Tipo Documento'
        verbose_name_plural = 'Tipos de documentos'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre

class Productor(models.Model):
    nombre = models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550)
    tipo_documento = models.ForeignKey(TipoDocumento)
    documento = models.CharField(max_length=50)
    direccion = models.TextField()
    cooperativa = models.ForeignKey(Cooperativa)
    latitud = models.FloatField(blank=True, null=True)
    longitud = models.FloatField(blank=True, null=True)
    foto = models.TextField()
    email = models.TextField()
    aprobado = models.CharField(max_length=20)
    nombreFinca = models.TextField()
    fincaCertificada = models.BooleanField()
    productosOrganicos = models.BooleanField()
    usuario = models.ForeignKey(User, blank=True, null=True)

    class Meta:
        verbose_name = 'Productor'
        verbose_name_plural = 'Productores'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre

class categoriaProducto(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=400)

    def __unicode__(self):
        return self.nombre

class producto(models.Model):
    def url(self, filename):
        ruta = "MultimediaData/producto/%s/%s" % (self.nombre, str(filename))
        return ruta

    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=300)
    status = models.BooleanField(default=True)
    imagen = models.TextField(null=True, blank=True)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField()
    unidadMedida = models.CharField(max_length=50, null=True, blank=True)
    categorias = models.ManyToManyField(categoriaProducto, blank=True)

    def __unicode__(self):
        return self.nombre
        # retornar nombre del producto para presentar una descripcion en el panel

class Oferta(models.Model):
    fecha = models.DateField()
    productor = models.ForeignKey(Productor, blank=False, null=False, unique=False)
    productos = models.ManyToManyField(producto, blank=False)

    def __unicode__(self):
        return self.productor.nombre

    def __str__(self):
        return 'Oferta'
