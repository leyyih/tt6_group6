from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json

d1 =  {
    "id": 1,
    "wallet_id": 1,
    "currency": "SGD",
    "amount": 4294.50
  }
d2 =  {
    "id": 2,
    "wallet_id": 1,
    "currency": "CAD",
    "amount": 5687.65
  }
d3 =  {
    "id": 3,
    "wallet_id": 1,
    "currency": "CNH",
    "amount": 6063.14
  }
d4 =   {
    "id": 4,
    "wallet_id": 1,
    "currency": "EUR",
    "amount": 8089.82
  }
d5 =   {
    "id": 5,
    "wallet_id": 1,
    "currency": "HKD",
    "amount": 7862.36
  }
d6 =   {
    "id": 6,
    "wallet_id": 1,
    "currency": "JPY",
    "amount": 5759.15
  }
d7 =   {
    "id": 7,
    "wallet_id": 1,
    "currency": "NZD",
    "amount": 6943.26
  }
d8 =   {
    "id": 8,
    "wallet_id": 1,
    "currency": "NOK",
    "amount": 4038.10
  }
d9 =   {
    "id": 9,
    "wallet_id": 1,
    "currency": "GBP",
    "amount": 8287.33
  }
d10 =   {
    "id": 10,
    "wallet_id": 1,
    "currency": "SEK",
    "amount": 5126.40
  }
d11 =   {
    "id": 11,
    "wallet_id": 1,
    "currency": "THB",
    "amount": 147.62
  }
d12 =   {
    "id": 12,
    "wallet_id": 1,
    "currency": "USD",
    "amount": 7331.77
  }
d13 =   {
    "id": 13,
    "wallet_id": 2,
    "currency": "SGD",
    "amount": 485.19
  }
d14 =   {
    "id": 14,
    "wallet_id": 2,
    "currency": "CAD",
    "amount": 2634.58
  }
d15 =   {
    "id": 15,
    "wallet_id": 2,
    "currency": "CNH",
    "amount": 3893.29
  }
d16 =   {
    "id": 16,
    "wallet_id": 2,
    "currency": "EUR",
    "amount": 3887.15
  }
d17 =   {
    "id": 17,
    "wallet_id": 2,
    "currency": "HKD",
    "amount": 4065.34
  }
d18 =   {
    "id": 18,
    "wallet_id": 2,
    "currency": "JPY",
    "amount": 1702.47
  }
d19 =   {
    "id": 19,
    "wallet_id": 2,
    "currency": "NZD",
    "amount": 3299.38
  }
d20 =   {
    "id": 20,
    "wallet_id": 2,
    "currency": "NOK",
    "amount": 7681.32
  }
d21 =   {
    "id": 21,
    "wallet_id": 2,
    "currency": "GBP",
    "amount": 3720.37
  }
d22 =   {
    "id": 22,
    "wallet_id": 2,
    "currency": "SEK",
    "amount": 4511.50
  }
d23 =   {
    "id": 23,
    "wallet_id": 2,
    "currency": "THB",
    "amount": 6216.60
  }
d24 =   {
    "id": 24,
    "wallet_id": 2,
    "currency": "USD",
    "amount": 9103.66
  }

def currency(request):
    return JsonResponse([d1,d2,d3,d4,d5,d6,d7], safe = False)

def index(request):
    return HttpResponse("Hello, world. You're at the page.")