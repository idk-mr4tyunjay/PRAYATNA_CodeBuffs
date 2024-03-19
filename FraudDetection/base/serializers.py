from rest_framework import serializers

class ApiCodeSerializer(serializers.Serializer):
    api_code = serializers.CharField()