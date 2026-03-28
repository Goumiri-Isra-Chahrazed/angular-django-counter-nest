from django.db import models

# Create your models here.
class Commune(models.Model):
    name = models.CharField(max_length=255)
    postcode = models.CharField(max_length=10)
    citycode = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return f"{self.name} ({self.postcode})"