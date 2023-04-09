from rest_framework import serializers

from apps.proekti.models import Proekt


class ProektSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proekt
        fields = '__all_'