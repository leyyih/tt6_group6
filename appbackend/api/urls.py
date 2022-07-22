from django.urls import path
from . import views

urlpatterns = [
    path('', views.currency, name='index'),
    path('', views.index, name='index'),
]