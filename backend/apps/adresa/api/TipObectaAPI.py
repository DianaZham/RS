from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import TipObecta
from apps.adresa.serializers import TipObectaSerializer


class TipObectaLV(APIView):
    def get(self, request, format=None):
        snippets = TipObecta.objects.all()
        serializer = TipObectaSerializer(snippets, many=True)
        return Response(serializer.data)


class TipObectaDV(APIView):

    def get_object(self, pk):
        try:
            return TipObecta.objects.get(pk=pk)
        except TipObecta.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        tip_obecta = self.get_object(pk=id)
        serializer = TipObectaSerializer(tip_obecta, many=False)
        return Response(serializer.data)
