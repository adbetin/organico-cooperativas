# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-30 01:07
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0005_auto_20171126_2232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='respuesta',
            name='fecha',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2017, 11, 29, 20, 6, 59, 697374), null=True),
        ),
    ]