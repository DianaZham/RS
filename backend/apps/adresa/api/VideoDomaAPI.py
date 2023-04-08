from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.adresa.models import VideoDoma
from apps.adresa.serializers.VideoDomaSerializer import VideoDomaSerializer


class VideoDomaLV(APIView):
    def get(self, request, format=None):
        snippets = VideoDoma.objects.all()
        serializer = VideoDomaSerializer(snippets, many=True)
        return Response(serializer.data)


class VideoDomaDV(APIView):

    def get_object(self, pk):
        try:
            return VideoDoma.objects.get(pk=pk)
        except VideoDoma.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):

        video_doma = self.get_object(pk=id)
        serializer = VideoDomaSerializer(video_doma, many=False)
        return Response(serializer.data)
