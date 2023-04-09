from django.db import models

from apps.proekti.models import TipResheniaPoProektu


class Proekt(models.Model):
    class Meta():
        verbose_name = 'Проект'
        verbose_name_plural = 'Проект'

    vnutrinii_nomer = models.CharField('Внутренний номер', max_length=255, null=True, blank=True )
    data_nachala_proekta = models.DateField('Дата начала проекта', null=True, blank=True )
    primechanie = models.TextField('Примечание', null=True, blank=True )


    # Что с ним делать
    # Кто делать будет
    # Даты контрольные
    # Дата принятия решения
    # Рабочая группа


    def __str__(self):
        result = self.vnutrinii_nomer if self.vnutrinii_nomer  else self.id
        return f'Проект #{result}'
