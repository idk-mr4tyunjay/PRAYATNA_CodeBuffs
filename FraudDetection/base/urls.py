from . import views
from django.urls import path


urlpatterns = [
    path('', views.home, name="home"),
    # path('', views.front, name="front"),
    path('api-code/', views.get_api_code, name='get_api_code'),
    # path('register/', views.register, name="register"),
]