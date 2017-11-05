from rest_framework import serializers
from administrador.models import Tema,Foro
from cooperativa.models import Cooperativa

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