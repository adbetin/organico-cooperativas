from rest_framework import serializers
from administrador.models import Tema,Foro, Respuesta
from cooperativa.models import Cooperativa
from productor.models import TipoDocumento, Productor

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