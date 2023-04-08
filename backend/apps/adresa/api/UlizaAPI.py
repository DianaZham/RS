from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import Uliza
from apps.adresa.serializers.UlizaSerializer import UlizaSerializer


class UlizaLV(APIView):
    def get(self, request, format=None):
        snippets = Uliza.objects.all()
        serializer = UlizaSerializer(snippets, many=True)
        return Response(serializer.data)


class UlizaDV(APIView):

    def get_object(self, pk):
        try:
            return Uliza.objects.get(pk=pk)
        except Uliza.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        uliza = self.get_object(pk=id)
        serializer = UlizaSerializer(uliza, many=False)
        return Response(serializer.data)
