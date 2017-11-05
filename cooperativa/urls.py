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
    url(r'^crearServicio/(?P<cooperativa_id>.+)$', views.serviciosAdmin, name="crear_cooperativa"),
    url(r'^listadoServicios/(?P<cooperativa_id>.+)$', views.serviciosAdmin, name="listado_cooperativa"),

    # Almacenamiento de datos
    url(r'^guardarCooperativa/$', views.guardarCooperativa, name="guardar_cooperativa"),
    url(r'^actualizarCooperativa/$', views.actualizarCooperativa, name="actualizar_cooperativa"),
    url(r'^guardarservicio/$', views.guardarServicio, name="guardar_servicio"),

    # Consulta de datos
    url(r'^cooperativalist$', views.cooperativasList, name="cooperativas_list"),
    url(r'consultarCooperativa/(?P<id>.+)/$', views.cooperativasGet, name="ver_cooperativa"),
    url(r'^servicioslist/(?P<cooperativa_id>.+)/$', views.serviciosList, name="servicios_list"),
    url(r'consultarservicio/(?P<cooperativa_id>.+)/$', views.serviciosGet, name="servicios_get")
]
