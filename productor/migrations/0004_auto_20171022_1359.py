# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-22 18:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productor', '0003_productor_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='productor',
            name='fincaCertificada',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='productor',
            name='nombreFinca',
            field=models.TextField(default='Nombre Finca'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='productor',
            name='productosOrganicos',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
