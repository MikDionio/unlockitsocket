from django.urls import path, include
from . import views
from rest_framework import routers

"""
Automatic routing from REST framework
"""
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'simple/students', views.StudentSimpleViewSet, basename='student_simple')
router.register(r'students', views.StudentViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
