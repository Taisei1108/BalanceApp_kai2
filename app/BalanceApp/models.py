# Create your models here.
from django.db import models

# Create your models here.

class Event(models.Model):
    name =  models.CharField(max_length=100, verbose_name="イベント名")
    def __str__(self): #以下2行は管理サイト使ってデータ入力したときに監督の名前で表示するための関数
        return self.name
class BorrowEvent(models.Model):
    name = models.CharField(max_length=100, verbose_name="メンバー")
    event_name = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name="イベント名", related_name='event')
    event_date = models.DateField()
    price = models.PositiveIntegerField()
    is_paid = models.BooleanField(verbose_name="支払いしたか",default=False)
    def __str__(self): #以下2行は管理サイト使ってデータ入力したときに監督の名前で表示するための関数
        return self.name