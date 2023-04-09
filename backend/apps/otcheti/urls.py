from django.urls import path

from apps.otcheti.api import RenderProtocolSoglasovaniaApi

urlpatterns = [
    path('render_protocol_soglasovania/<soglosovanie_po_proektu_id>/', RenderProtocolSoglasovaniaApi.as_view()),
]
