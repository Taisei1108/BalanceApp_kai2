from django.shortcuts import render

# Create your views here.
# Create your views here.
from rest_framework import generics
from .models import BorrowEvent
from .serializers import BalanceAppSerializer


class ListEvent(generics.ListAPIView):
    queryset = BorrowEvent.objects.all()
    serializer_class = BalanceAppSerializer


class DetailEvent(generics.RetrieveAPIView):
    queryset = BorrowEvent.objects.all()
    serializer_class = BalanceAppSerializer