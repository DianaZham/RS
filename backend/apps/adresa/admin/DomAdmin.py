from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from apps.adresa.models import Dom, FotoDoma

class FotoDomaInline(admin.TabularInline):
    model = FotoDoma
    extra = 0
    autocomplete_fields = ['dom']


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
