from rest_framework import serializers
from .models import BorrowEvent


class BalanceAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = BorrowEvent
        fields = ('id', 'name', 'event_name','event_date','price','is_paid',)