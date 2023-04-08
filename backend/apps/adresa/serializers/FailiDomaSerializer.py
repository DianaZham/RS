from rest_framework import serializers

from apps.adresa.models import FailiDoma


class FailiDomaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FailiDoma
        fields = '__all_'