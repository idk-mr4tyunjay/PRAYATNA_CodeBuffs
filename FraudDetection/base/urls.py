from . import views
from django.urls import path
from rest_framework.routers import DefaultRouter
urlpatterns = [
    path('', views.home, name="home"),
]

router = DefaultRouter()
router.register(r'api-code', views.ApiCodeViewSet, basename='api-code')


urlpatterns += router.urls