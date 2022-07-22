from django.urls import path
from . import views

urlpatterns = [
    path('', views.currency, name='index'),
    path('', views.index, name='index'),
    path('listOfWallets', views.listOfWallets, name = 'listOfWallets'),
    path('<int:id>/listOfCurrencies', views.listOfCurrencies, name = 'listOfCurrencies'),
    path('liveExchangeRate', views.liveExchangeRate, name = 'liveExchangeRate'),
    path('loginSession', views.loginSession, name = "loginSession")
]