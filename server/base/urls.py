from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProucts, name='products'),
]
