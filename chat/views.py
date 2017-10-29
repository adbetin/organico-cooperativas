# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, get_object_or_404
import random
import string
from django.db import transaction
#import haikunator

from cooperativa.models import Cooperativa
from .models import Room

# Create your views here.

def chat_room(request, label):
    """
    Room view - show the room, with latest messages.
    The template for this view has the WebSocket business to send and stream
    messages, so see the template for where the magic happens.
    """
    # If the room with the given label doesn't exist, automatically create it
    # upon first visit (a la etherpad).

    cooperativa = get_object_or_404(Cooperativa, id=1)
    room, created = Room.objects.get_or_create(label=label, cooperativa=cooperativa)

    # We want to show the last 50 messages, ordered most-recent-last
    messages = reversed(room.messages.order_by('-timestamp')[:50])

    return render(request, "chat/room.html", {
        'room': room,
        'messages': messages,
    })