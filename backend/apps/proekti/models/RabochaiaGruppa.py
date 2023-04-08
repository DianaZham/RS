from django.db import models

from apps.vladelzi_zdani.models import TipVladelza


class RabochaiaGruppa(models.Model):
    class Meta():
        verbose_name = 'Рабочая группа'
        verbose_name_plural = 'Рабочие группы'

    name = models.CharField('Название или ФИО', max_length=255)
    tip_vladelza = models.ForeignKey(TipVladelza, verbose_name='Тип владельца',  on_delete=models.CASCADE)
    primechanie = models.TextField('Примечание', null=True, blank=True)
    telefon = models.CharField('Телефон', max_length=255, null=True, blank=True)
    email = models.CharField('Почта', max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
