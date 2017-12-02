from rest_framework import serializers
from cooperativa.models import Cooperativa, Servicio, DiasReparto


class CooperativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cooperativa
        fields = '__all__'


class ServicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Servicio
        fields = '__all__'

class DiasRepartoSerializer(serializers.ModelSerializer):

    class Meta:
        model = DiasReparto
        fields = '__all__'