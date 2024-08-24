export default function RecipeItem({recipe}: {recipe: Recipe}) {
    return (
        <li>
            <h3 className="text-2xl font-bold">{recipe.name}</h3>
            <img src={recipe.photoUrl} alt=""/>
            <p>{recipe.description}</p>
           
        </li>
    ) 
}

export type Recipe = {
    id: number;
    photoUrl: string;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string;
}