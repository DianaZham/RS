from django.db import models

class Rayon(models.Model):
    class Meta():
        verbose_name = 'Район'
        verbose_name_plural = 'Районы'

    name = models.CharField('Название района', max_length=255)

    def __str__(self):
        return f"{self.name or '-'}"
