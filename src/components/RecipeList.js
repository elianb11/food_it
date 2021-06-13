import './RecipeList.css';
import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

export default function RecipeList(props) {

    const requestCore = 'https://www.themealdb.com/api/json/v1/1/';
    const requestParams = props.params
    const url = requestCore + requestParams;

    const [meals, setMeals] = React.useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setMeals(json.meals))
    }, [url]);

    function handleClick(e) {
        history.push("/recipe",{params:e.target.id})
    }

    let history = useHistory();

    return(
        <div className="RecipeList">
            {!meals ? 
                <div>
                    <h1>Nous n'avons trouvé aucune recette correspondant à votre recherche...</h1>
                    <h1>Essayez quelque chose d'autre !</h1>
                </div> 
            : meals.map((meal) => (
                <div>
                    <div 
                    id={meal.idMeal}
                    onClick={handleClick}
                    className="Recipe">
                        <img id={meal.idMeal} src={meal.strMealThumb} alt="randompic"/>
                        <p id={meal.idMeal}>{meal.strMeal}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}