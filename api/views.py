from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Student

from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import *

from rest_framework.permissions import AllowAny

from django.utils import timezone


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = (AllowAny,)

    # def update(self, request, pk=None):
    #     return Response({
    #         'detail': 'PUT requests not allowed'
    #     })

    def partial_update(self, request, pk=None, *args, **kwargs):
        data = request.data
        obj = Student.objects.filter(pk=pk).first()
        if obj and 'is_using' in data:
            is_logout = obj.is_using and not data['is_using']
            if is_logout and not ('balance' in data or 'decrement' in data):
                new_balance = int(obj.balance - (timezone.now() - obj.last_login).total_seconds())
                new_balance = new_balance if new_balance > 0 else 0
                data['balance'] = new_balance
                print("Balance auto-decremented to: {}".format(new_balance))

            if is_logout and 'decrement' in data and 'balance' not in data:
                new_balance = obj.balance - data['decrement']
                new_balance = new_balance if new_balance > 0 else 0
                data['balance'] = new_balance
                print("Balance decremented to: {}".format(new_balance))

            is_login = not obj.is_using and data['is_using']
            if is_login and obj.balance <= 0:
                data['is_using'] = False
                print("insuffience balance: login failed")



        return super().partial_update(request, pk, *args, **kwargs)

class StudentSimpleViewSet(StudentViewSet):
    serializer_class = StudentSimpleSerializer
