# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-12-02 21:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='productos',
            new_name='producto',
        ),
    ]
