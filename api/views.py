from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Student

from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import *

from rest_framework.permissions import AllowAny


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

    # def partial_update(self, request, pk=None):
    #     return Response({
    #         'detail': 'PATCH requests not allowed'
    #     })

class StudentSimpleViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSimpleSerializer
    permission_classes = (AllowAny,)

    # def update(self, request, pk=None):
    #     return Response({
    #         'detail': 'PUT requests not allowed'
    #     })

    def partial_update(self, request, pk=None, *args, **kwargs):
        print(request.data)
        return super().partial_update(request, pk, *args, **kwargs)