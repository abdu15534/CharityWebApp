from django.urls import path
from . import views

app_name = "charity"

urlpatterns = [
    path('', views.dashboard, name = "dashboard"),
]
