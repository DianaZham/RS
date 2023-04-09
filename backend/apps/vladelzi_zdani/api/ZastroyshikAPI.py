from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.vladelzi_zdani.models import Zastroyshik
from apps.vladelzi_zdani.serializers import ZastroyshikSerializer


class ZastroyshikLV(APIView):
    def get(self, request, format=None):
        snippets = Zastroyshik.objects.all()
        serializer = ZastroyshikSerializer(snippets, many=True)
        return Response(serializer.data)


class ZastroyshikDV(APIView):

    def get_object(self, pk):
        try:
            return Zastroyshik.objects.get(pk=pk)
        except Zastroyshik.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        zastroyshik = self.get_object(pk=id)
        serializer = ZastroyshikSerializer(zastroyshik, many=False)
        return Response(serializer.data)
