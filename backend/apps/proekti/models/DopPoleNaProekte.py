
from django.db import models

from apps.adresa.models import Dom, DopPoleDoma
from apps.proekti.models import Proekt


class DopPoleNaProekte(models.Model):
    class Meta():
        verbose_name = 'Доп поле для проекта'
        verbose_name_plural = 'Доп поля для проекта'

    dop_pole_proekta = models.ForeignKey(DopPoleDoma, verbose_name='Доп поле дома', on_delete=models.CASCADE)
    proekt = models.ForeignKey(Proekt, verbose_name='Дом', on_delete=models.CASCADE)
    znachenie = models.CharField('Значение', null=True, blank=True, max_length=255)

    def __str__(self):
        return f'Проект номер {self.proekt.vnutrinii_nomer} {self.dop_pole_proekta.name}'
