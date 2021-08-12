from rest_framework import serializers
from .models import OtherMenu, Menu

class OtherMenuSeliaraizer(serializers.ModelSerializer):
    class Meta:
        model = OtherMenu
        fields = (
            'id',
            'name',
            'temperature',
            'size', 
            'price',
            'espresso',
            'softDrink',
            'forKids',
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

