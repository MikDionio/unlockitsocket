from django.db import models
from django.db import connection
from django.utils import timezone
# Create your models here.
# EDIT

class Student(models.Model):
    rfid_number = models.BigIntegerField(primary_key=True)
    student_number = models.BigIntegerField(null=True)    
    name = models.CharField(max_length=100)
    balance = models.PositiveIntegerField(default=0)    
    is_using = models.BooleanField(default=False)
    last_login = models.DateTimeField(null=True, editable=False)
    last_logout = models.DateTimeField(null=True, editable=False)
    last_balance_change = models.DateTimeField(null=True, editable=False)
    

    def save(self, *args, **kwargs):        
        try:                 
            old_student = Student.objects.get(pk=self.pk)
            print("IS UPDATING")
            # is using
            old_using = old_student.is_using
            if not old_using and self.is_using:
                print("LOG IN")
                self.last_login = timezone.now()
            elif old_using and not self.is_using:
                print("LOG OUT")
                self.last_logout = timezone.now()

            # balance
            old_balance = old_student.balance
            if self.balance != old_balance:
                print("BALANCE CHANGE")
                self.last_balance_change = timezone.now()
        except:
            print("IS CREATING OR UPATING PK")
        finally:
            super().save(*args, **kwargs)


    class Meta:
        ordering = ['name']

 