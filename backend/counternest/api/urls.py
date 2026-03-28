
from django.urls import path
from .views import CommuneByPostcode, CommuneList

urlpatterns = [
    path('communes/', CommuneList.as_view(), name= 'Commune list of Ile de France'),
    path('communes/<str:postcode>/', CommuneByPostcode.as_view(), name='Commune by postcode'),

]