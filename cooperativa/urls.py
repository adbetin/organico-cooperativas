"""organico_cooperativas URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^$', views.cooperativasAdmin, name="home_cooperativas"),

    # Vistas
    url(r'^crearCooperativa/$', views.cooperativasAdmin, name="crear_cooperativa"),
    url(r'^listadoCooperativa/$', views.cooperativasAdmin, name="listado_cooperativa"),
    url(r'^actualizardatos/(?P<id>.+)$', views.cooperativasDetail, name="actualizar_datos"),
    url(r'^detalle/(?P<id>.+)$', views.cooperativasDetail, name='detalle_cooperativa'),
    url(r'^servicio/crearServicio', views.cooperativasAdmin, name="crear_servicio"),
    url(r'^Productos/crearProducto', views.cooperativasAdmin, name="crear_producto"),
    url(r'^servicio/listadoServicios/(?P<cooperativa_id>.+)$', views.serviciosAdmin, name="listado_servicio"),

    # Almacenamiento de datos
    url(r'^guardarCooperativa/$', views.guardarCooperativa, name="guardar_cooperativa"),
    url(r'^actualizarCooperativa/$', views.actualizarCooperativa, name="actualizar_cooperativa"),
    url(r'^servicio/guardarServicio/$', views.guardarServicio, name="guardar_servicio"),
    url(r'^diasreparto/actualizar/$', views.actualizarDiasReparto, name="actualizar_dias_reparto"),

    # Consulta de datos
    url(r'^cooperativalist$', views.cooperativasList, name="cooperativas_list"),
    url(r'^consultarCooperativa/(?P<id>.+)/$', views.cooperativasGet, name="ver_cooperativa"),
    url(r'^servicioslist/(?P<cooperativa_id>.+)/$', views.serviciosList, name="servicios_list"),
    url(r'^consultarservicio/(?P<id>.+)/$', views.serviciosGet, name="servicios_get"),
    url(r'^consultardiasreparto/(?P<cooperativa_id>.+)/(?P<anio>.+)/(?P<semana>.+)/$', views._diasRepartoGet, name="dias_reparto_get"),
    url(r'^consultardiasreparto/(?P<cooperativa_id>.+)/$', views.diasRepartoGet, name="dias_reparto_actual_get")
]
