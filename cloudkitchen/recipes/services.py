from .models import Recipe, Wishlist


class RecipeService:

    @staticmethod
    def get_all():
        return list(Recipe.objects.all().values("id", "name", "description", "ingredients", "instructions", "img"))

    @staticmethod
    def get_by_id(id):
        return Recipe.objects.values("id", "name", "description", "ingredients", "instructions", "img").get(id=id)

    @staticmethod
    def get_by_name(name):
        return Recipe.objects.get(name=name)
    
    @staticmethod
    def add_wishlist(id, recipeId):
        [wishlist] = Wishlist.objects.get_or_create(id=id)
        wishlist.recipes.add(Recipe.objects.get(id=recipeId))
        wishlist.save()

    @staticmethod
    def remove_wishlist(id, recipeId):
        [wishlist] = Wishlist.objects.get_or_create(id=id)
        wishlist.recipes.remove(Recipe.objects.get(id=recipeId))
        wishlist.save()

    @staticmethod
    def is_wishlisted(user_id, recipe_id):
        wishlist = Wishlist.objects.get(user__id=user_id)
        if not wishlist:
            return False
        return wishlist.recipes.contains(Recipe.objects.get(id=recipe_id))