# Generated by Django 4.2 on 2023-04-09 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proekti', '0006_remove_resheniepoproektu_status_ispolnenia_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resheniepoproektu',
            name='otvestveni',
        ),
        migrations.AddField(
            model_name='uchastnikrabochaiagruppa',
            name='is_otvestveni',
            field=models.BooleanField(default=False, verbose_name='Отвественный'),
        ),
    ]
