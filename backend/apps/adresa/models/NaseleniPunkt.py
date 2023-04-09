from django.db import models

from apps.adresa.models import Rayon


class NaseleniPunkt(models.Model):
    class Meta():
        verbose_name = 'Населенный пунт'
        verbose_name_plural = 'Населеные пункты'

    name = models.CharField('Название', max_length=255)
    rayon = models.ForeignKey(Rayon,  verbose_name='Район', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        rayon = ''
        okrug = ''
        if self.rayon:
            rayon = self.rayon.name
            if self.rayon.okrug:
                okrug = self.rayon.okrug.name
        return f"{okrug} {rayon} {self.name or '-'}"