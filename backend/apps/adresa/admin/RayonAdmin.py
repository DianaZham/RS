from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from apps.adresa.models import Rayon


@admin.register(Rayon)
class RayonAdmin(ImportExportModelAdmin):
    list_display = [
        'id',
        'name',
        'okrug',
    ]
    list_display_links = [
        'id',
        'name',
        'okrug',
    ]
    search_fields = [
        'id',
        'name',
        'okrug',
    ]