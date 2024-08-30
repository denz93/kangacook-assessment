import { useLoaderData } from "react-router-dom"
import RecipeList from "../components/RecipeList"
import * as recipeService from "../services/recipe"

export async function loader() {
    return await recipeService.getRecipies()
}
export default function Home() {
    const recipeList = useLoaderData() as Awaited<ReturnType<typeof loader>>
      return (
        <div className=''>
          <h1 className='text-4xl text-center my-10'>Welcome to Cloud Kitchen</h1>
          <div className='px-10'>
    
            <RecipeList recipes={recipeList}/>
          </div>
        </div>
      )
}