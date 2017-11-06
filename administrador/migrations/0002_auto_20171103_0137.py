# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-11-03 06:37
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='foro',
            old_name='tipo_documento',
            new_name='tema',
        ),
        migrations.AlterField(
            model_name='respuesta',
            name='fecha',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2017, 11, 3, 1, 37, 3, 721000), null=True),
        ),
    ]