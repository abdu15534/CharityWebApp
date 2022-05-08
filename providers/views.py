from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from decorators import allowed_users
# Create your views here.
@login_required(login_url='login')
@allowed_users(allowed_roles=['provider'])
def dashboard(request):
    return render(request, 'providers/provider-acc.html')
