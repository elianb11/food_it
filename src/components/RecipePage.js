import './RecipePage.css';
import Banner from './Banner';
import MenuBox from './MenuBox';
import Footer from './Footer'
import React from 'react'

export default function RecipePage(props) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(0);

    const requestCore = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    var requestId = props.location.state.params;
    const url = requestCore + requestId;

    const [meal, setMeal] = React.useState({});

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setMeal(json.meals[0]))
    }, [url]);
    
    return (
        <div className="RecipePage">
            <header>
                <Banner isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </header>
            <body className="RecipePage-body">
                <MenuBox isMenuOpen={isMenuOpen}/>
                <div className="RecipePage-body-main">
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strTags}/>
                    <p className="Categorie"><span>Catégorie :</span> {meal.strCategory}</p>
                    <p className="Origine"><span>Origine :</span> {meal.strArea}</p>
                    {meal.strYoutube !== "" ? 
                        <a target="_blank" href={meal.strYoutube}>Voir la recette en vidéo...</a>
                        :
                        null
                    }
                    <p><span>Instructions :</span> {meal.strInstructions}</p>
                    <ul className="Ingredients"><span>Ingrédients : </span>
                        {(meal.strIngredient1 !== "" && meal.strIngredient1 != null) ? <li>• {meal.strMeasure1} of {meal.strIngredient1}</li> : null}
                        {(meal.strIngredient2 !== "" && meal.strIngredient2 != null) ? <li>• {meal.strMeasure2} of {meal.strIngredient2}</li> : null}
                        {(meal.strIngredient3 !== "" && meal.strIngredient3 != null) ? <li>• {meal.strMeasure3} of {meal.strIngredient3}</li> : null}
                        {(meal.strIngredient4 !== "" && meal.strIngredient4 != null) ? <li>• {meal.strMeasure4} of {meal.strIngredient4}</li> : null}
                        {(meal.strIngredient5 !== "" && meal.strIngredient5 != null) ? <li>• {meal.strMeasure5} of {meal.strIngredient5}</li> : null}
                        {(meal.strIngredient6 !== "" && meal.strIngredient6 != null) ? <li>• {meal.strMeasure6} of {meal.strIngredient6}</li> : null}
                        {(meal.strIngredient7 !== "" && meal.strIngredient7 != null) ? <li>• {meal.strMeasure7} of {meal.strIngredient7}</li> : null}
                        {(meal.strIngredient8 !== "" && meal.strIngredient8 != null) ? <li>• {meal.strMeasure8} of {meal.strIngredient8}</li> : null}
                        {(meal.strIngredient9 !== "" && meal.strIngredient9 != null) ? <li>• {meal.strMeasure9} of {meal.strIngredient9}</li> : null}
                        {(meal.strIngredient10 !== "" && meal.strIngredient10 != null) ? <li>• {meal.strMeasure10} of {meal.strIngredient10}</li> : null}
                        {(meal.strIngredient11 !== "" && meal.strIngredient11 != null) ? <li>• {meal.strMeasure11} of {meal.strIngredient11}</li> : null}
                        {(meal.strIngredient12 !== "" && meal.strIngredient12 != null) ? <li>• {meal.strMeasure12} of {meal.strIngredient12}</li> : null}
                        {(meal.strIngredient13 !== "" && meal.strIngredient13 != null) ? <li>• {meal.strMeasure13} of {meal.strIngredient13}</li> : null}
                        {(meal.strIngredient14 !== "" && meal.strIngredient14 != null) ? <li>• {meal.strMeasure14} of {meal.strIngredient14}</li> : null}
                        {(meal.strIngredient15 !== "" && meal.strIngredient15 != null) ? <li>• {meal.strMeasure15} of {meal.strIngredient15}</li> : null}
                        {(meal.strIngredient16 !== "" && meal.strIngredient16 != null) ? <li>• {meal.strMeasure16} of {meal.strIngredient16}</li> : null}
                        {(meal.strIngredient17 !== "" && meal.strIngredient17 != null) ? <li>• {meal.strMeasure17} of {meal.strIngredient17}</li> : null}
                        {(meal.strIngredient18 !== "" && meal.strIngredient18 != null) ? <li>• {meal.strMeasure18} of {meal.strIngredient18}</li> : null}
                        {(meal.strIngredient19 !== "" && meal.strIngredient19 != null) ? <li>• {meal.strMeasure19} of {meal.strIngredient19}</li> : null}
                        {(meal.strIngredient20 !== "" && meal.strIngredient20 != null) ? <li>• {meal.strMeasure20} of {meal.strIngredient20}</li> : null}
                    </ul>
                </div>
            </body>
            <Footer/>
        </div>
    );
}