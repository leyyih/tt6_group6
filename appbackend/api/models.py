from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.

class User(models.Model):
    username = models.CharField( max_length = 20)
    password = models.TextField()
    name = models.TextField()


class ExchangeRate(models.Model):
    base_currency  =  models.CharField(max_length= 3)
    exchange_currency =  models.CharField(max_length = 3)
    rate = models.FloatField( validators= [MinValueValidator(0)])

    class Meta:
        pass
    def __str__(self):
        return 
class Wallet(models.Model):
    user_id = models.OneToOneField(User, on_delete = models.CASCADE)
    name = models.TextField()
    class Meta:
        pass
    def __str__(self):
        return 
    
class Currency(models.Model):
    currency_name = models.CharField(max_length= 3)
    currency_amount = models.FloatField(validators = [MinValueValidator(0)])
    wallet_id = models.OneToOneField(Wallet, on_delete= models.CASCADE )

    class Meta:
        pass
    def __str__(self):
        return 



class Transaction(models.Model):
    wallet_id = models.OneToOneField(Wallet, on_delete= models.PROTECT)
    debit_id = models.OneToOneField(Wallet, on_delete= models.PROTECT, related_name='%(class)s_requests_created')
    debit_currency = models.CharField(max_length= 3)
    debit_amount = models.FloatField(validators= [MinValueValidator(0)])
    credit_id = models.OneToOneField(Wallet, on_delete= models.PROTECT, related_name='requests_created')
    credit_currency = models.CharField(max_length=3)
    credit_amount = models.FloatField(validators = [MinValueValidator(0)])
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.TextField()
    updated_at = models.DateField(auto_now = True)
    updated_by = models.TextField()

    class Meta:
        pass
    def __str__(self):
        return 
