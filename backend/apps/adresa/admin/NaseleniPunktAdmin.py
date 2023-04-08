from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from apps.adresa.models import NaseleniPunkt


@admin.register(NaseleniPunkt)
class NaseleniPunktAdmin(ImportExportModelAdmin):
    list_display = [
        'id',
        'name',
    ]
    list_display_links = [
        'id',
        'name',
    ]
    search_fields = [
        'id',
        'name',
    ]