from django.shortcuts import render
# from ..users.decorators import unauthenticated_user, allowed_users, admin_only
from django.contrib.auth.decorators import login_required
# Create your views here.
@login_required(login_url='login')
def ShowIndex(request):
    return render(request, 'main/index.html')

@login_required(login_url='login')
def ShowContact(request):
    return render(request, 'main/contact.html')

@login_required(login_url='login')
def ShowReel(request):
    return render(request, 'main/showreel.html')

@login_required(login_url='login')
def ShowBlog(request):
    return render(request, 'main/blogs.html')

@login_required(login_url='login')
def ShowUserPage(request):
    return render(request, 'main/user-acc.html')

@login_required(login_url='login')
def VolunteerJoin(request):
    return render(request, 'main/volunteer-join.html')