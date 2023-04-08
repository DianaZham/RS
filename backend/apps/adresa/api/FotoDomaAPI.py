from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import FotoDoma
from apps.adresa.serializers.FotoDomaSerializer import FotoDomaSerializer


class FotoDomaLV(APIView):
    def get(self, request, format=None):
        snippets = FotoDoma.objects.all()
        serializer = FotoDomaSerializer(snippets, many=True)
        return Response(serializer.data)


class FotoDomaDV(APIView):

    def get_object(self, pk):
        try:
            return FotoDoma.objects.get(pk=pk)
        except FotoDoma.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        foto_doma = self.get_object(pk=id)
        serializer = FotoDomaSerializer(foto_doma, many=False)
        return Response(serializer.data)
