# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-30 03:15
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0010_auto_20171129_2137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='respuesta',
            name='fecha',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2017, 11, 29, 22, 15, 29, 296854), null=True),
        ),
    ]