from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import FailiDoma
from apps.adresa.serializers.FailiDomaSerializer import FailiDomaSerializer


class FailiDomaLV(APIView):
    def get(self, request, format=None):
        snippets = FailiDoma.objects.all()
        serializer = FailiDomaSerializer(snippets, many=True)
        return Response(serializer.data)


class FailiDomaDV(APIView):

    def get_object(self, pk):
        try:
            return FailiDoma.objects.get(pk=pk)
        except FailiDoma.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        faili_doma = self.get_object(pk=id)
        serializer = FailiDomaSerializer(faili_doma, many=False)
        return Response(serializer.data)
