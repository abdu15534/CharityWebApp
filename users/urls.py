from django.urls import path
from . import views

# app_name = "users"

urlpatterns = [
    path('', views.loginPage, name = "login"),
    path('signup/', views.signUp, name = "signup"),
    path('logout/', views.logoutUser, name = "logout"),
    # path('index/', views.index),
    # path('charity/', views.charity_acc),
    # path('provider/', views.provider_acc),
]