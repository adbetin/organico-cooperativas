# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render


# Create your views here.

def home(request):
    context = {}
    return render(request, 'index.html', context)

def shop(request):
    context = {}
    return render(request, 'shop.html', context)

def team(request):
    context = {}
    return render(request, 'team.html', context)
