from rest_framework import serializers

from apps.adresa.models import FailDoma

class FailiDomaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FailDoma
        fields = '__all_'