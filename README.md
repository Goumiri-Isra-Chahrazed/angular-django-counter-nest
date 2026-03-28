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

## ✅ Features

    * Counter displayed on the main page.
    - Two main routes:
      - `/up` – increases counter by X (default 1)
      - `/down` – decreases counter by X (default 1)
    - Background color changes:
      - Red (`#e74c3c`) when counter ≥ 10
      - Green (`#27ae60`) when counter ≤ -10
    - Dynamic increment step X:
      - Every 30 actions, X doubles
    - `/reset` page:
      - Reset counter with optional date input
    - Backend fetch:
      - Retrieves "Île-de-France" communes every 5 minutes
      - If counter reaches Melun postal code, resets to 0

  🧪 **Toggle Test Mode:**
   ```ts , app.ts
    isTestMode = true; // default false 
    When enabled:
       - A panel appears with an input box.
       - Enter a number (e.g., 77000) and click Jump To.
       - Counter jumps to that value instantly.
       - Shows:
          -Total actions
          -Current step multiplier


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
