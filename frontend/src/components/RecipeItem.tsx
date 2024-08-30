export default function RecipeItem({recipe}: {recipe: Recipe}) {
    return (
        <li className="flex gap-4 ">
            <div className="flex-[0_0_auto] w-[120px] relative">
                <img className="w-full h-full object-cover" src={recipe.img} alt="Meal pic"/>
            </div>
            <div className="flex-auto">
                <h3 className="text-2xl font-bold">{recipe.name}</h3>
                <p className="line-clamp-3">{recipe.description}</p>
                <a href={`/recipe/${recipe.id}`} className="btn btn-primary">See more</a>

            </div>
        </li>
    ) 
}

export type Recipe = {
    id: number;
    img: string;
    name: string;
    description: string;
    ingredients: string;
    instructions: string;
    is_wishlisted: boolean;
}