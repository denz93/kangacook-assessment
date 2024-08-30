from django.contrib import admin
from .models import Recipe, Wishlist
# Register your models here.

class RecipeAdmin(admin.ModelAdmin):
    pass 

class WishListAdmin(admin.ModelAdmin):
    pass 

admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Wishlist, WishListAdmin)
