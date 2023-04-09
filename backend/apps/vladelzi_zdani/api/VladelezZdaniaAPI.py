from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.vladelzi_zdani.models import VladelezZdania
from apps.vladelzi_zdani.serializers import VladelezZdaniaSerializer


class VladelezZdaniaLV(APIView):
    def get(self, request, format=None):
        snippets = VladelezZdania.objects.all()
        serializer = VladelezZdaniaSerializer(snippets, many=True)
        return Response(serializer.data)


class VladelezZdaniaDV(APIView):

    def get_object(self, pk):
        try:
            return VladelezZdania.objects.get(pk=pk)
        except VladelezZdania.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        vladelez_zdania = self.get_object(pk=id)
        serializer = VladelezZdaniaSerializer(vladelez_zdania, many=False)
        return Response(serializer.data)
