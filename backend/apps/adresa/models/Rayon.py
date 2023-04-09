from django.db import models

from apps.adresa.models import Okrug


class Rayon(models.Model):
    class Meta():
        verbose_name = 'Район'
        verbose_name_plural = 'Районы'

    name = models.CharField('Название района', max_length=255)
    okrug = models.ForeignKey(Okrug, verbose_name='Округ', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.name or '-'}"
