from django.db import models

from apps.adresa.models import Uliza, SostoyanieDoma, TipObecta
from apps.vladelzi_zdani.models import VladelezZdania, Zastroyshik


class Dom(models.Model):
    class Meta():
        verbose_name = 'Дом'
        verbose_name_plural = 'Дома'

    uliza = models.ForeignKey(Uliza, verbose_name='Улица', on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField('Номер дома', max_length=255)
    etazhnost = models.IntegerField('Этажность', null=True, blank=True)
    ploshad = models.FloatField('Площадь', null=True, blank=True)
    god_realizazii = models.IntegerField('Год реализации', null=True, blank=True)
    lat = models.FloatField(null=True, blank=True)
    lon = models.FloatField(null=True, blank=True)
    json_dadata = models.TextField(null=True, blank=True)
    vladelez_zdania = models.ForeignKey(VladelezZdania, verbose_name='Владелец здания', on_delete=models.SET_NULL, null=True, blank=True)
    zastroyshik = models.ForeignKey(Zastroyshik, verbose_name='Застройщик', on_delete=models.SET_NULL, null=True, blank=True)
    tip_obecta = models.ForeignKey(TipObecta, verbose_name='Тип объекта', on_delete=models.SET_NULL, null=True, blank=True)
    sostoyanie_doma = models.ForeignKey(SostoyanieDoma, verbose_name='Состояние дома', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.get_full_adres()

    def get_full_adres(self):
        return f'{self.uliza.naseleni_punkt.name} {self.uliza.name} {self.name}'