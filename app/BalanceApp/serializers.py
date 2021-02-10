from rest_framework import serializers
from .models import BorrowEvent,Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class BalanceAppSerializer(serializers.ModelSerializer):
    event_name = EventSerializer()
    class Meta:
        model = BorrowEvent
        fields = ('id', 'name', 'event_name','event_date','price','is_paid',)

