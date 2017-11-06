from channels.staticfiles import StaticFilesConsumer
from channels.routing import route
from chat.consumers import ws_message, ws_add, ws_disconnectNew
from chat import consumers


channel_routing = {
    # This makes Django serve static files from settings.STATIC_URL, similar
    # to django.views.static.serve. This isn't ideal (not exactly production
    # quality) but it works for a minimal example.
    #'http.request': StaticFilesConsumer(),

    # Wire up websocket channels to our consumers:
    'websocket.connect': consumers.ws_add,
    'websocket.receive': consumers.ws_message,
    'websocket.disconnect': consumers.ws_disconnectNew,
    #'websocket.receive': consumers.ws_echo

    #route("websocket.connect", ws_add),
    #route("websocket.receive", ws_message),
    #route("websocket.disconnect", ws_disconnectNew),
}