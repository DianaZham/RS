import datetime
import os

from dicttoxml import dicttoxml
from django.http import HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import Dom
from apps.proekti.models import Proekt
from core.settings import MEDIA_ROOT


class RenderXmlApi(APIView):
    def get(self, request, model_dlya_xml):

        if model_dlya_xml == 'proekt':
            data = list(Proekt.objects.all().values())
        elif model_dlya_xml == 'dom':
            data = list(Dom.objects.all().values())
        else:
            return Response(status=400, data={'statusText':'Неизвестнвая таблица в БД'})


        os_dir_path = os.path.join(MEDIA_ROOT, 'xml')
        if not os.path.exists(os_dir_path):
            os.makedirs(os_dir_path)


        file_name = f"{model_dlya_xml} {datetime.datetime.now()}.xml"

        with open(f'{os_dir_path}/{file_name}', 'w') as xmlfile:
            xml = dicttoxml(data)
            xmlfile.write(xml.decode())


        return HttpResponseRedirect(f'/media/xml/{file_name}')