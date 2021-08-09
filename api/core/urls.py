from  django.urls import path,include
from  rest_framework.routers import DefaultRouter
from  .views import MenuViewSet, OtherMenuViewSet

router = DefaultRouter()
router.register(r"Menu", MenuViewSet)
router.register(r"OtherMenu" , OtherMenuViewSet)

urlpatterns = [
    path("", include(router.urls)),
]