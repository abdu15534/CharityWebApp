from ast import If
import email
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse

from .forms import CreateUserForm

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group

from django.contrib import messages

from decorators import unauthenticated_user, allowed_users, admin_only

# Create your views here.
@unauthenticated_user
def signUp(request):
    form = CreateUserForm()

    if request.method == 'POST':
        radioSelection = request.POST.get('select-user-type')
        
        query_set = Group.objects.filter(name = radioSelection)
        
        group = Group()
        if query_set.count() == 0:
            group = Group(name=radioSelection)
            group.save() # Create a sample group.
        else:
            group = query_set[0]

        

        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user_name = request.POST.get("username")
            password = request.POST.get("password1")

            user = authenticate(username=user_name,password=password)

            if user is not None:
                login(request,user)
                user = request.user # get Some User.
                user.groups.add(group)
            messages.success(request, 'Account was created for '+  request.POST.get('username'))
            return redirect("login")

    context = {'form': form}
    return render(request, 'users/signup.html',context)

@unauthenticated_user
def loginPage(request):
    if request.method == 'POST':
        username= request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username = username, password= password)
        
        if user is not None:
            login(request, user)
            if request.user.groups.filter(name="provider").exists():
                return redirect('providers:dashboard')
            elif request.user.groups.filter(name="charity").exists():
                return redirect('charity:dashboard')
            else:
                return redirect('main:dashboard')
        else:
            messages.info(request,'Username or Password incorrect')

    return render(request, 'users/login.html')

def logoutUser(request):
    logout(request)
    return redirect(loginPage)




# def charity_acc(request):
#     return render(request, 'users/charity-acc.html')

# def provider_acc(request):
#     return render(request, 'users/provider-acc.html')

# def user_acc(request):
#     return render(request, 'users/user-acc.html')