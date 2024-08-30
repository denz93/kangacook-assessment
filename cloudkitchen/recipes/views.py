from django.http import JsonResponse, HttpResponseForbidden, HttpResponseNotFound
from django.views.decorators.http import require_POST, require_GET
from .models import RecipeEncoder

from .services import RecipeService
from django.contrib.auth import login, get_user_model
# Create your views here.

@require_GET
def all(request):
    User = get_user_model()
    login(request, user=User.objects.get(username="admin"))
    result = {
        "recipes": RecipeService.get_all()
    }
    return JsonResponse(result, encoder=RecipeEncoder, status=200)


@require_POST
def add_wishlist(request, recipe_id):
    user = request.user
    if (not user.is_authenticated):
        return HttpResponseForbidden(content="Must be logged in to add to wishlist")
    RecipeService.add_wishlist(user.id, recipe_id)
    return JsonResponse({"result": True})

@require_GET
def get_by_id(request, recipe_id):
    recipe = RecipeService.get_by_id(recipe_id)
    if not recipe:
        return HttpResponseNotFound()
    if request.user.is_authenticated:
        recipe["is_wishlisted"] = RecipeService.is_wishlisted(request.user.id, recipe_id)
    return JsonResponse({"recipe": recipe}, encoder=RecipeEncoder, status=200)
