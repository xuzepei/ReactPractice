import { recipes, poem } from "./Data";

function Recipe({id, name, ingredients}) {
    return (
        <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    );
}

export default function RecipeList() {

    function poemItems(id, ingredients) {

        const items = ingredients.map(ingredient => {
            return <li key={id}>{ingredient}</li>
        });
    
        return (
            <ul>
                {items}
            </ul>
        );
    }
    
    const items = recipes.map(recipe=>{
        return (
            <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />
        );
    });

    return (
        <div>
            <h1>菜谱</h1>
            {items}
            <h1>诗歌</h1>
            {poem.lines.map((line, index)=>
            <div key={index}>{line}{index<poem.lines.length-1 && <hr/>}</div>)}
        </div>
    );
}