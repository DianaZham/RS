from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import Dom
from apps.adresa.serializers.DomSerializer import DomSerializer


class DomLV(APIView):
    def get(self, request, format=None):
        snippets = Dom.objects.all()
        serializer = DomSerializer(snippets, many=True)
        return Response(serializer.data)


class DomDV(APIView):

    def get_object(self, pk):
        try:
            return Dom.objects.get(pk=pk)
        except Dom.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        dom = self.get_object(pk=id)
        serializer = DomSerializer(dom, many=False)
        return Response(serializer.data)
