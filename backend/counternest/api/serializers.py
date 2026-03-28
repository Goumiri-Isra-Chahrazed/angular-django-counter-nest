from rest_framework import serializers
from .models import Commune

class CommuneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commune
        fields = ['name', 'postcode']