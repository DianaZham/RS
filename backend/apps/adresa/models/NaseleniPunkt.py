from django.db import models

class NaseleniPunkt(models.Model):
    class Meta():
        verbose_name = 'Населенный пунт'
        verbose_name_plural = 'Населеные пункты'

    name = models.CharField('Название', max_length=255)

    def __str__(self):
        return f"{self.name or '-'}"