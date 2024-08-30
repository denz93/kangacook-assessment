from django.db import models
from django.contrib.auth.models import User
from json import JSONEncoder
# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=200, unique=True)
    description = models.TextField()
    ingredients = models.TextField(null=True)
    instructions =  models.TextField(null=True)
    img =  models.TextField(null=True, default="")
    created = models.DateTimeField(auto_created=True)

    def __str__(self):
        return self.name
            
    
class RecipeEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, Recipe):
            return {
                "name": o.name,
                "description": o.description,
                "ingredients": o.ingredients,
                "instructions": o.instructions,
                "img": o.img
            }
        return JSONEncoder.default(self, o)
    
class Wishlist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    recipes = models.ManyToManyField(Recipe)
