# Generated by Django 4.2 on 2023-04-09 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proekti', '0003_doppoleproekta_doppolenaproekte'),
    ]

    operations = [
        migrations.AddField(
            model_name='doppolenaproekte',
            name='znachenie',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Значение'),
        ),
    ]
