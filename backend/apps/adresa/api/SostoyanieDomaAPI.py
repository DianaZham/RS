from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import SostoyanieDoma
from apps.adresa.serializers import SostoyanieDomaSerializer

class SostoyanieDomaLV(APIView):
    def get(self, request, format=None):
        snippets = SostoyanieDoma.objects.all()
        serializer = SostoyanieDomaSerializer(snippets, many=True)
        return Response(serializer.data)


class SostoyanieDomaDV(APIView):

    def get_object(self, pk):
        try:
            return SostoyanieDoma.objects.get(pk=pk)
        except SostoyanieDoma.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        sostoyanie_doma = self.get_object(pk=id)
        serializer = SostoyanieDomaSerializer(sostoyanie_doma, many=False)
        return Response(serializer.data)
