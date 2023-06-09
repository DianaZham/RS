# Generated by Django 4.2 on 2023-04-09 14:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('adresa', '0012_doppoledoma_doppolenadome'),
        ('proekti', '0002_soglosovaniepoproektu_statussoglasovania_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='DopPoleProekta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Доп поле для проекта',
                'verbose_name_plural': 'Доп поля для проекта',
            },
        ),
        migrations.CreateModel(
            name='DopPoleNaProekte',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dop_pole_proekta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='adresa.doppoledoma', verbose_name='Доп поле дома')),
                ('proekt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='proekti.proekt', verbose_name='Дом')),
            ],
            options={
                'verbose_name': 'Доп поле для проекта',
                'verbose_name_plural': 'Доп поля для проекта',
            },
        ),
    ]
