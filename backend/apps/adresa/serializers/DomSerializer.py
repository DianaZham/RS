from rest_framework import serializers

from apps.adresa.models import Dom


class DomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dom
        fields = '__all__'