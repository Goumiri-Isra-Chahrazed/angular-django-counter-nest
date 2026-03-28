# communes/services.py
import requests
from .models import Commune


def fetch_communes():

    queries = ["paris", "versailles", "melun", "evry", "cergy"]

    for q in queries:
        url = f"https://api-adresse.data.gouv.fr/search/?q={q}&type=municipality"
        
        response = requests.get(url)
        data = response.json()

        for feature in data.get("features", []):
            props = feature["properties"]

            postcode = props.get("postcode")
            if not postcode:
                continue

            # Filter Île-de-France
            if not postcode.startswith(("75", "77", "78", "91", "92", "93", "94", "95")):
                continue

            Commune.objects.update_or_create(
                citycode=props["citycode"],
                defaults={
                    "name": props["city"],
                    "postcode": postcode,
                }
            )

