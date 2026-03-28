# CounterNest - Angular + Django

## 📦 Project Structure

* frontend → Angular app
* backend → Django API

## 🚀 Setup

### Frontend

```bash
cd frontend
npm install
ng serve
```

### Backend

```bash
For the backend setup, please check the file SETUP.md in the backend folder
python manage.py runserver
```

## ✅ Features

* Persistent counter feature
* Up / Down / Reset pages
* Backend integration: 
    - Add Commune model and DRF serializers
    - Add API endpoints:
    - GET /api/communes/ → list all communes
    - GET /api/communes/<postcode>/ → check if commune exists
    - Implement Celery task `fetch_communes` to retrieve Île-de-France communes periodically
    - Configure django-celery-beat for scheduling every 5 minutes
    - Add Redis / Memurai as Celery broker
    - Filter communes using postal codes of Île-de-France (75,77,78,91-95)
