# backend
FROM python:3.10 as backend
ENV PYTHONUNBUFFERED 1
WORKDIR backend
COPY /backend/requirements.txt /backend
RUN pip install --upgrade pip && pip install -r requirements.txt
CMD python manage.py runserver 0.0.0.0:8000


