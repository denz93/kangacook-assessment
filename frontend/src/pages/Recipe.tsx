import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'
import * as recipeService from '../services/recipe'
import { FaHeart, FaRegHeart } from "react-icons/fa";
export async function loader({params}: LoaderFunctionArgs) {
    const recipe = await recipeService.getRecipeById(+(params["id"]??0))
    if (!recipe) {
        console.log("Recipe not found")
        throw new Response("Recipe not found", {status: 404})
    }
    return recipe
}
export default function Recipe() {
    
    const recipe = useLoaderData() as Awaited<ReturnType<typeof loader>>
    return <div className='grid grid-cols-1 md:grid-cols-2 px-6 gap-4'>
        <div>
            <div className='flex items-center'>
                <h1 className='text-4xl my-4'>{recipe.name}</h1>
                <div className='ml-auto'>
                    {recipe.is_wishlisted ? <FaHeart size={24}/> : <FaRegHeart size={24}/>}
                </div>
            </div>
            <div className='relative w-full h-[400px]'>
                <img className='w-full h-full object-cover' src={recipe.img} alt=""/>
            </div>
        </div>
        <div>
            <h3 className='text-2xl my-5'>Description</h3>
            <p>{recipe.description}</p>
            <h3 className='text-2xl my-5'>Ingredients</h3>

            <p>{recipe.ingredients}</p>
            <h3 className='text-2xl my-5'>Instructions</h3>
            <p>{recipe.instructions}</p>   

            
            { !recipe.is_wishlisted && <button className='btn btn-primary mt-5' onClick={() => {
                recipeService.addToWishlist(recipe.id)

            }}>Add to wishlist</button> }

            { recipe.is_wishlisted && <button className='btn btn-secondary mt-5' onClick={() => {
                recipeService.removeFromWishlist(recipe.id)
            }}>Remove from wishlist</button> }
        </div>
    </div>
}