# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect

from cooperativa.models import Cooperativa
from productor.models import Productor
from .models import Room

# Create your views here.

@login_required(login_url='login')
def chat_room(request):
    """
    Room view - show the room, with latest messages.
    The template for this view has the WebSocket business to send and stream
    messages, so see the template for where the magic happens.
    """
    # If the room with the given label doesn't exist, automatically create it
    # upon first visit (a la etherpad).

    try:
        productor = Productor.objects.get(usuario=request.user)
    except:
        return redirect('not_found')

    room, created = Room.objects.get_or_create(label="chat %s" % productor.cooperativa.nombre, cooperativa=productor.cooperativa)

    # We want to show the last 50 messages, ordered most-recent-last
    messages = reversed(room.messages.order_by('-timestamp')[:50])

    return render(request, "chat/room.html", {
        'room': room,
        'messages': messages,
        'cooperativaid': productor.cooperativa.id,
        'productorid': productor.id
    })