from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import Okrug
from apps.adresa.serializers import OkrugSerializer


class OkrugLV(APIView):
    def get(self, request, format=None):
        snippets = Okrug.objects.all()
        serializer = OkrugSerializer(snippets, many=True)
        return Response(serializer.data)


class OkrugDV(APIView):

    def get_object(self, pk):
        try:
            return Okrug.objects.get(pk=pk)
        except Okrug.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        okrug = self.get_object(pk=id)
        serializer = OkrugSerializer(okrug, many=False)
        return Response(serializer.data)
