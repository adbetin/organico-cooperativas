# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-05 19:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cooperativa', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productor',
            name='cooperativa',
        ),
        migrations.RemoveField(
            model_name='productor',
            name='tipo_documento',
        ),
        migrations.DeleteModel(
            name='Productor',
        ),
        migrations.DeleteModel(
            name='TipoDocumento',
        ),
    ]