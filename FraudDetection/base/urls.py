from . import views
from django.urls import path


urlpatterns = [
    # path('', views.home, name="home"),
    path('api-code/', views.get_api_code, name='get_api_code'),
    path('register/', views.register_user, name="register"),
    path("", views.front, name="front"),
]