from django.urls import path

from recipes import views

urlpatterns = [
    path("", views.all, name="index"),
    path("<int:recipe_id>/wishlist", views.add_wishlist, name="add_wishlist"),
    path("<int:recipe_id>", views.get_by_id, name="get_by_id"),
]