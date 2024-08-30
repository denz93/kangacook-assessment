import { Recipe } from "../components/RecipeItem"

const baseUrl = 'http://localhost:8000'

export async function getRecipies() {
  const url = `${baseUrl}/recipes`
  const res = await fetch(url, {redirect: 'follow'})
  const result = await res.json() as {recipes: Recipe[]}
  return result.recipes
}

export async function getRecipeById(id: number) {
  const url = `${baseUrl}/recipes/${id}`
  const res = await fetch(url, {redirect: 'follow'})
  const result = await res.json() as {"recipe": Recipe}
  return result.recipe
}

export async function addToWishlist(recipeId: number) {
  const url = `${baseUrl}/recipes/${recipeId}/wishlist`
  const res = await fetch(url, {method: 'POST', redirect: 'follow', credentials: "include"})
  const result = await res.json() as {"result": boolean}
  return result.result
}

export async function removeFromWishlist(recipeId: number) {
  const url = `${baseUrl}/recipes/${recipeId}/wishlist`
  const res = await fetch(url, {method: 'DELETE', redirect: 'follow', credentials: "include"})
  const result = await res.json() as {"result": boolean}
  return result.result
}