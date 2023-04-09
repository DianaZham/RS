from django.db import models

from apps.adresa.models import Dom
from apps.proekti.models import Proekt, TipResheniaPoProektu, UchastnikRabochaiaGruppa


class ResheniePoProektu(models.Model):
    class Meta():
        verbose_name = 'Решение по проекту'
        verbose_name_plural = 'Решение по проекту'

    proekt = models.ForeignKey(Proekt, verbose_name='Проект', on_delete=models.CASCADE)
    dom = models.ForeignKey(Dom, verbose_name='Дом', on_delete=models.PROTECT)
    tip_reshenia_po_proektu = models.ForeignKey(TipResheniaPoProektu, on_delete=models.SET_NULL, null=True, blank=True)
    primechanie_po_resheniu = models.TextField('Примечание по решению', null=True, blank=True)
    data_priniatia_reshenia = models.DateField('Дата принятия решения', null=True, blank=True)
    data_ispolnenia_po_resheniyu =  models.DateField('Дата для исполненения решения', null=True, blank=True)
    status_ispolnenia = models.IntegerField('Статус исполения решения', null=True, blank=True)

    otvestveni = models.ForeignKey(UchastnikRabochaiaGruppa, verbose_name="Отвественный", null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f'Дом по проекту {self.dom.get_full_adres()}'
