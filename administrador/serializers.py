from rest_framework import serializers
from administrador.models import Tema,Foro, Respuesta
from cooperativa.models import Cooperativa
from productor.models import TipoDocumento, Productor, producto, Oferta, categoriaProducto
from django.utils import six

class CooperativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cooperativa
        fields = '__all__'

class TemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tema
        fields = '__all__'

class ForoSerializer(serializers.ModelSerializer):
    cooperativa = CooperativaSerializer(many=False, read_only=True, allow_null=False)
    tema = TemaSerializer(many=False, read_only=True, allow_null=False)
    class Meta:
        model = Foro
        fields = '__all__'

class TipoDocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoDocumento
        fields = '__all__'

class ProductorSerializer(serializers.ModelSerializer):
    cooperativa = CooperativaSerializer(many=False,read_only=True, allow_null=False)
    tipo_documento = TipoDocumentoSerializer(many=False,read_only=True, allow_null=False)

    class Meta:
        model = Productor
        fields = '__all__'

class RespuestaSerializer(serializers.ModelSerializer):
    productor = ProductorSerializer(many=False, read_only=True, allow_null=False)
    class Meta:
        model = Respuesta
        fields = '__all__'

class CategoriaProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = categoriaProducto
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    categorias = serializers.SerializerMethodField()
    class Meta:
        model = producto
        fields = '__all__'

    def get_categorias(self, obj):
        response = []
        for _categoria in obj.categorias.all():
            pr_list = CategoriaProductoSerializer(
                _categoria)
            response.append(pr_list.data)
        return response

class OfertaSerializer(serializers.ModelSerializer):
    #fecha = serializers.SerializerMethodField()
    productor = ProductorSerializer(many=False,read_only=True, allow_null=False)
    productos = ProductoSerializer(many=False,read_only=True, allow_null=False)
    class Meta:
        model = Oferta
        fields = '__all__'

    def get_fecha(self, obj):
        return six.text_type(obj)