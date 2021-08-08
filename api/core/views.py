from rest_framework import viewsets
from .serializers import MenuSeliaraizer, OtherMenuSeliaraizer
from .models import Menu, OtherMenu

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSeliaraizer
    queryset = Menu.objects.all()

class OtherMenuViewSet(viewsets.ModelViewSet):
    serializer_class = OtherMenu
    queryset = OtherMenu.objects.all()