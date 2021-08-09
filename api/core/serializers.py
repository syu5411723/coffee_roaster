from rest_framework import serializers
from .models import OtherMenu, Menu

class OtherMenuSeliaraizer(serializers.ModelSerializer):
    class Meta:
        model = OtherMenu
        fields = (
            'id',
            'name',
            'picture',
            'water_temperature',
            'espresso',
            'soft_drink',
            'for_kids',
        )

class MenuSeliaraizer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = (
            'id', 
            'name',
            'picture',
            'size',
            'price',
        )

