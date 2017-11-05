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
    url(r'^$', views.foroAdmin, name="inicio_foros"),
    # Vistas
    url(r'^crearForo/$', views.foroAdmin, name="crear_foro"),
    url(r'^listaForo/$', views.foroAdmin, name="lista_foro"),
    url(r'^editarForo/(?P<id>.+)$', views.ForoDetail, name="actualizar_datos"),
    url(r'^respuestaForo/(?P<id>.+)$', views.ForoDetail, name="respuesta_foro"),

    # Almacenamiento de datos
    url(r'^guardarForo/$', views.guardarForo, name="guardar_foro"),

    # Consulta de datos
    url(r'^temasForoList$', views.temasForoList, name="listado_temas"),
    url(r'^forosList$', views.foroList, name="listado_foros"),
    url(r'^editarDatosForo/$', views.editarForo, name="editar_foro"),

    url(r'consultarForo/(?P<id>.+)/$', views.foroGet, name="ver_foro")

]
