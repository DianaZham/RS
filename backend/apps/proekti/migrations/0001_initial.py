# Generated by Django 4.2 on 2023-04-09 04:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('adresa', '0003_dom_vladelez_zdania'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Proekt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vnutrinii_nomer', models.CharField(blank=True, max_length=255, null=True, verbose_name='Внутренний номер')),
                ('data_nachala_proekta', models.DateField(blank=True, null=True, verbose_name='Дата начала проекта')),
                ('primechanie', models.TextField(blank=True, null=True, verbose_name='Примечание')),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Проект',
            },
        ),
        migrations.CreateModel(
            name='StatusIspolnenia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nazvanie', models.CharField(max_length=255, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Статус исполнения',
                'verbose_name_plural': 'Статус исполнения',
            },
        ),
        migrations.CreateModel(
            name='TipResheniaPoProektu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nazvanie', models.CharField(max_length=255, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Тип решения по проекту',
                'verbose_name_plural': 'Тип решения по проекту',
            },
        ),
        migrations.CreateModel(
            name='UchastnikRabochaiaGruppa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fio_uchastnika_gruppi', models.CharField(max_length=255, null=True, verbose_name='ФИО участника')),
                ('dolznost_uchastnika_gruppi', models.CharField(max_length=255, null=True, verbose_name='Должность участника')),
                ('proekt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='proekti.proekt', verbose_name='Проект')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Участник рабочей группа',
                'verbose_name_plural': 'Участники рабочей группы',
            },
        ),
        migrations.CreateModel(
            name='ResheniePoProektu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primechanie_po_resheniu', models.TextField(blank=True, null=True, verbose_name='Примечание по решению')),
                ('data_priniatia_reshenia', models.DateField(blank=True, null=True, verbose_name='Дата принятия решения')),
                ('data_ispolnenia_po_resheniyu', models.DateField(blank=True, null=True, verbose_name='Дата для исполненения решения')),
                ('status_ispolnenia', models.IntegerField(blank=True, null=True, verbose_name='Статус исполения решения')),
                ('dom', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='adresa.dom', verbose_name='Дом')),
                ('otvestveni', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='proekti.uchastnikrabochaiagruppa', verbose_name='Отвественный')),
                ('proekt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='proekti.proekt', verbose_name='Проект')),
                ('tip_reshenia_po_proektu', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='proekti.tipresheniapoproektu')),
            ],
            options={
                'verbose_name': 'Решение по проекту',
                'verbose_name_plural': 'Решение по проекту',
            },
        ),
        migrations.CreateModel(
            name='DomPoProektu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dom', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='adresa.dom', verbose_name='Дом')),
                ('proekt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='proekti.proekt', verbose_name='Проект')),
            ],
            options={
                'verbose_name': 'Дом по проекту',
                'verbose_name_plural': 'Дома по проекту',
            },
        ),
    ]
