from rest_framework import serializers
from productor.models import Productor, TipoDocumento, producto, Oferta, categoriaProducto
from cooperativa.models import Cooperativa
import datetime
from django.utils import six
from rest_framework.utils import encoders

class TipoDocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoDocumento
        fields = '__all__'

class CooperativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cooperativa
        fields = '__all__'

class ProductorSerializer(serializers.ModelSerializer):
    cooperativa = CooperativaSerializer(many=False,read_only=True, allow_null=False)
    tipo_documento = TipoDocumentoSerializer(many=False,read_only=True, allow_null=False)

    class Meta:
        model = Productor
        fields = '__all__'

class SimpleProductorSerializer(serializers.ModelSerializer):
    cooperativa = CooperativaSerializer(many=False,read_only=True, allow_null=False)
    tipo_documento = TipoDocumentoSerializer(many=False,read_only=True, allow_null=False)

    class Meta:
        model = Productor
        exclude = ('foto',)

class CategoriaProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = categoriaProducto
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    categorias = CategoriaProductoSerializer(many=True, read_only=True, allow_null=True)
    class Meta:
        model = producto
        fields = '__all__'


class OfertaSerializer(serializers.ModelSerializer):
    fecha = serializers.SerializerMethodField()
    productor = ProductorSerializer(many=False,read_only=True, allow_null=False)
    productos = serializers.SerializerMethodField()
    class Meta:
        model = Oferta
        fields = '__all__'

    def get_fecha(self, obj):
        return six.text_type(obj)

    def get_productos(self, obj):
        response = []
        for _product in obj.productos.all():
            pr_list = ProductoSerializer(
                _product)
            response.append(pr_list.data)
        return response