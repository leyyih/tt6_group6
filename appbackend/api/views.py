from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from django.core.serializers import serialize



def index(request):
    return HttpResponse("Welcome to your wallet")

def loginSession(request, id):
    
    pass

def listOfWallets(request):
    listOfWallet = Wallet.objects.all()
    data = serialize('json', listOfWallet)
    return HttpResponse(data)

def liveExchangeRate(request):
    return HttpResponse('liveExchangeRate')

def listOfCurrencies(request, id):
    return HttpResponse('lstOfCurrenceis')
