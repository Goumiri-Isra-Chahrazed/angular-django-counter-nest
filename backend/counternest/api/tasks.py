from celery import shared_task
from .services import fetch_communes

@shared_task
def fetch_communes_task():
    fetch_communes()