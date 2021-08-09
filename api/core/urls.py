from  django.urls import path,include
from  rest_framework.routers import DefaultRouter
from  .views import MenuViewSet, OtherMenuViewSet

router = DefaultRouter()
router.register(r"menu", MenuViewSet)
router.register(r"other-menu" , OtherMenuViewSet)

urlpatterns = [
    path("", include(router.urls)),
]