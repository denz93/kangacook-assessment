import RecipeItem, { Recipe } from "./RecipeItem";



export default function RecipesList({recipes}: {recipes: Recipe[]}) {
    
    return (
        <ul className="grid grid-cols-4 gap-4">
            {recipes.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe}/>
            ))}
        </ul>
    )
}