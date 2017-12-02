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

from . import views

urlpatterns = [
    # views
    url(r'^$', views.productorAdmin, name="home_productor"),
    url(r'^registro/$', views.productorAdmin, name="registrar_productor"),
    url(r'^admin/registro$', views.productorAdmin, name="registrar_productor_administrador"),
    url(r'^lista', views.productorLista, name="listar_productor"),
    url(r'^detalle/(?P<id>.+)$', views.productorDetail, name='detalle_productor'),
    url(r'^editar/(?P<id>.+)$', views.productorDetail, name='editar_productor'),
    url(r'^productos/carga', views.productorProductosDetail, name='productos_productor'),

    # rest services
    url(r'^service$', views.productoresList, name="servicios_productor"),
    url(r'^service/simple$', views.simpleProductoresList, name="servicios_productor"),
    url(r'^get/(?P<id>.+)$', views.productorGet, name='get_productor'),
    url(r'^editarProductor/(?P<id>.+)$', views.productorEditar, name='editar_productor'),
    url(r'^correo$', views.enviarCorreo, name='enviar_correo'),
    url(r'^productos$', views.enviarProductos, name='productos_productor_enviar'),
    url(r'^productosObtener$', views.recibirProductos, name='productos_productor_obtener'),
    url(r'^productosLista$', views.listarProductos, name='productos_productor_listar'),
    url(r'^productorPorUsuario/(?P<id>.+)$$', views.obtenerUsuarioPorUserId, name='productor_usuario'),


    url(r'^correo/active$', views.activarCorreo, name='activar_correo'),
    url(r'^correo/active/obtener$', views.verificarEstadoCorreos, name='activar_correo'),
    url(r'^correo/activar$', views.activarCorreos, name='activar_envio_correos')
]