from rest_framework import serializers
from .models import OtherMenu, Menu

class OtherMenuSeliaraizer(serializers.ModelSeliaraizer):
    class Meta:
        model = OtherMenu
        fields = (
            'id',
            'name',
            'picture'
            'water_temperature',
            'espreso',
            'soft_drink',
            'for_kids',
        )

class MenuSeliaraizer(serializers.ModelSeliaraizer):
    class Meta:
        model = Menu
        fields = (
            'id', 
            'name',
            'picture',
            'size',
            'price',
        )

