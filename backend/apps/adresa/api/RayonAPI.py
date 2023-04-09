from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import Rayon
from apps.adresa.serializers import RayonSerializer


class RayonLV(APIView):
    def get(self, request, format=None):
        snippets = Rayon.objects.all()
        serializer = RayonSerializer(snippets, many=True)
        return Response(serializer.data)


class RayonDV(APIView):

    def get_object(self, pk):
        try:
            return Rayon.objects.get(pk=pk)
        except Rayon.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        rayon = self.get_object(pk=id)
        serializer = RayonSerializer(rayon, many=False)
        return Response(serializer.data)
