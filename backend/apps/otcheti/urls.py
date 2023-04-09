from django.urls import path

from apps.otcheti.api import RenderProtocolSoglasovaniaApi, RenderXmlApi

urlpatterns = [
    path('render_protocol_soglasovania/<soglosovanie_po_proektu_id>/', RenderProtocolSoglasovaniaApi.as_view()),
    path('render_xml_api/<model_dlya_xml>/', RenderXmlApi.as_view()),
]
