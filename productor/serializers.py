from rest_framework import serializers
from productor.models import Productor, TipoDocumento
from cooperativa.models import Cooperativa

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