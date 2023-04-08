from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from apps.adresa.models import  Uliza


@admin.register(Uliza)
class UlizaAdmin(ImportExportModelAdmin):
    list_display = [
        'id',
        'naseleni_punkt',
        'name',
    ]
    list_display_links = [
        'id',
        'naseleni_punkt',
        'name',
    ]
    search_fields = [
        'id',
        'name',
        'naseleni_punkt__name',
    ]
    list_filter = ['naseleni_punkt']