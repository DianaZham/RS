from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from apps.adresa.admin import FotoDomaInline, VideoDomaInline, FailDomaInline
from apps.adresa.models import Dom, FotoDoma




@admin.register(Dom)
class DomAdmin(ImportExportModelAdmin):
    list_display = [
        'id',
        'uliza',
        'name',
        'etazhnost',
        'ploshad',
        'lat',
        'lon'
    ]
    inlines = [
        FotoDomaInline,
        VideoDomaInline,
        FailDomaInline,
    ]
    autocomplete_fields = ['uliza', ]
    list_display_links = [
        'id',
        'uliza',
        'name',
    ]
    search_fields = [
        'id',
        'uliza__name',
        'uliza__naseleni_punkt__name',
        'name',
    ]
    list_filter = ['uliza__naseleni_punkt', 'uliza']
    save_as = True
    save_on_top = True
