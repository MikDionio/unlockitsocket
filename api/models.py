from django.db import models
from django.db import connection
# Create your models here.

class Student(models.Model):
    student_number = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    balance = models.IntegerField()
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']