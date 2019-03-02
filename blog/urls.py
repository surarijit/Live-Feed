from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('homapge.html', views.fun, name='id'),
]