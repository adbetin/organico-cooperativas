# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-10-28 23:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('productor', '0005_merge_20171022_1408'),
        ('cooperativa', '0003_auto_20171008_1549'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('handle', models.TextField()),
                ('message', models.TextField()),
                ('timestamp', models.DateTimeField(db_index=True, default=django.utils.timezone.now)),
                ('productor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productor.Productor')),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('label', models.SlugField(unique=True)),
                ('cooperativa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cooperativa.Cooperativa')),
            ],
        ),
        migrations.AddField(
            model_name='message',
            name='room',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='chat.Room'),
        ),
    ]