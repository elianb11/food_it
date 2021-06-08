import './RecipeList.css';
import React, { useState, useEffect } from 'react'

export default function RecipeList(props) {


    const requestCore = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
    const requestParams = props.params
    console.log(props);
    const url = requestCore + requestParams;

    const [meals, setMeals] = React.useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setMeals(json.meals))
            console.log(meals)
        console.log("useEffect done")
    }, [url]);

    return(
        <div className="RecipeList">
            {meals.map((meal) => (
                <div>
                    <div className="Recipe">
                        <img src={meal.strMealThumb} alt="randompic"/>
                        <p>{meal.strMeal}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}