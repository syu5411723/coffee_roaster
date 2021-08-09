from rest_framework import serializers
from .models import OtherMenu, Menu

class OtherMenuSeliaraizer(serializers.ModelSerializer):
    class Meta:
        model = OtherMenu
        fields = (
            'id',
            'name',
            'picture',
            'temperature',
            'espresso',
            'softDrink',
            'kids',
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

