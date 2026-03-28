🚀 Tech Test Setup Instructions

This project uses Django REST Framework and Celery for background tasks.
Redis (or Memurai on Windows) acts as the Celery broker.

1️⃣ Install Dependencies
# Create & activate virtual environment
python -m venv myenv

# Windows
myenv\Scripts\activate

# macOS/Linux
source myenv/bin/activate

# Install Python requirements
pip install -r requirements.txt
2️⃣ Configure Database & Migrations
# Apply migrations
python manage.py migrate

# Create superuser to access Django admin
python manage.py createsuperuser
3️⃣ Start Redis / Memurai (Celery Broker)
Windows (Memurai)
Download Memurai Community Edition: https://www.memurai.com
Start Memurai from terminal or Start Menu:
memurai.exe
Memurai listens on localhost:6379 by default.
macOS / Linux (Redis)
# Install Redis
brew install redis      # macOS
sudo apt install redis  # Ubuntu/Linux

# Start Redis server
redis-server

Test connection (optional):

python -c "import redis; r=redis.Redis(host='localhost', port=6379); print(r.ping())"
# Should print True
4️⃣ Start Celery

In a separate terminal, start both the worker and beat scheduler.

# Navigate to project folder
cd backend/counternest

# Start Celery worker (Windows requires -P solo)
celery -A counternest worker -l info -P solo

# Start Celery beat scheduler (periodic tasks)
celery -A counternest beat -l info