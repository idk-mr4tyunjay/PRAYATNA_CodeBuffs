import uuid
from django.db import models
from django.contrib.auth.models import User, AbstractUser

# 
"""
I want to create a model database, it should be named customuser,
it will be containing the following fields, 
the firstname lastname username email phone , password and transcations

the transaction is also a model database, such that, one user can have multiple transactions
it will contain the following fields
a unique id, sender_user, recieving_user, amount, sender_bal, reciever_bal, transaction_start_time, status, transaction_type

transaction_type should have values such as cash, debit, credit, payment, transfer

ccan you create these two models for me


"""

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=10)
    transactions = models.ManyToManyField('Transaction', related_name='users_involved')

    def __str__(self):
        return self.username


class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ('cash', 'Cash'),
        ('debit', 'Debit'),
        ('credit', 'Credit'),
        ('payment', 'Payment'),
        ('transfer', 'Transfer'),
    ]

    tx_id = models.UUIDField(unique=True, editable=False, default=uuid.uuid4)
    sender_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sent_transactions')
    receiving_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='received_transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    sender_balance = models.DecimalField(max_digits=10, decimal_places=2)
    receiver_balance = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_start_time = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='pending')
    transaction_type = models.CharField(max_length=20, choices=TRANSACTION_TYPES)

    def __str__(self):
        return f"Transaction ID: {self.tx_id}, Sender: {self.sender_user.username}, Receiver: {self.receiving_user.username}, Amount: {self.amount}, Type: {self.transaction_type}"
