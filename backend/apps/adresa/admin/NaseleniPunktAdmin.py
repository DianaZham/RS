from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from apps.adresa.models import NaseleniPunkt


@admin.register(NaseleniPunkt)
class NaseleniPunktAdmin(ImportExportModelAdmin):
    list_display = [
        'id',
        'name',
        'rayon',
    ]
    autocomplete_fields = ['rayon']
    list_display_links = [
        'id',
        'name',
        'rayon',
    ]
    search_fields = [
        'id',
        'name',
        'rayon',
    ]