# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-30 21:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productor', '0014_auto_20171130_1624'),
    ]

    operations = [
        migrations.AddField(
            model_name='oferta',
            name='cantidad',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
