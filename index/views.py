# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import logout, authenticate, login
from django.http import HttpResponse
import json

# Create your views here.

def home(request):
    context = {}
    return render(request, 'index.html', context)


def logout_view(request):
    logout(request)
    # Redirect to a success page.
    return redirect('home')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        response_data = {}
        if user is not None: #and user.is_active
            login(request, user)
            response_data['result'] = 'Success!'
            response_data['message'] = 'You"re logged in'
        else:
            response_data['result'] = 'failed'
            response_data['message'] = 'Login error'

        return HttpResponse(json.dumps(response_data), content_type="application/json")
    else:
        return redirect('not_found')

def notFound(request):
    context = {}
    return render(request, 'notFound.html', context)

def shop(request):
    context = {}
    return render(request, 'shop.html', context)

def team(request):
    context = {}
    return render(request, 'team.html', context)

@login_required(login_url='login')
def profile(request):
    context = {}
    return render(request, 'profile.html', context)
