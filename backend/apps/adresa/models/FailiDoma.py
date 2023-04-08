import uuid
from django.db import models
from django.template.defaultfilters import safe

from apps.adresa.models import Dom


class FailiDoma(models.Model):
    class Meta():
        verbose_name = 'Файл дома'
        verbose_name_plural = 'Файлы дома'

    fail = models.FileField('Файл', )
    data = models.DateField('Дата видео', null=True, blank=True)
    dom = models.ForeignKey(Dom, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return 'фото'
