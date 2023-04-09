from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.vladelzi_zdani.models import TipVladelza
from apps.vladelzi_zdani.serializers import TipVladelzaSerializer

class TipVladelzaLV(APIView):
    def get(self, request, format=None):
        snippets = TipVladelza.objects.all()
        serializer = TipVladelzaSerializer(snippets, many=True)
        return Response(serializer.data)


class TipVladelzaDV(APIView):

    def get_object(self, pk):
        try:
            return TipVladelza.objects.get(pk=pk)
        except TipVladelza.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        tip_vladelza = self.get_object(pk=id)
        serializer = TipVladelzaSerializer(tip_vladelza, many=False)
        return Response(serializer.data)
