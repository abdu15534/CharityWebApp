from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.ShowIndex, name= 'home'),
    path('contact/', views.ShowContact, name= 'contact'),
    path('reel/', views.ShowReel, name= 'reel'),
    path('blogs/', views.ShowBlog, name= 'blogs'),
    path('volunteer-join/', views.VolunteerJoin, name= 'volunteer'),
    path('user/', views.ShowUserPage, name= 'dashboard'),
]