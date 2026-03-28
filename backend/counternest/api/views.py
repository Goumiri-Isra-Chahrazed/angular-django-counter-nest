from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Commune
from .serializers import CommuneSerializer

class CommuneList(APIView):
    def get(self, request):
        communes = Commune.objects.all()
        serializer = CommuneSerializer(communes, many=True)
        return Response(serializer.data)

class CommuneByPostcode(APIView):
    def get(self, request, postcode):
        exists = Commune.objects.filter(postcode=postcode).exists()
        return Response({"exists": exists})