import React from 'react'
import './Calculator.css';
import Banner from './Banner';
import MenuBox from './MenuBox';
import Formulaire from './Formulaire';
import Footer from './Footer';

export default function Calculator(props) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(0);

    const [sexe, setSexe] = React.useState("homme");
    const [taille, setTaille] = React.useState();
    const [poids, setPoids] = React.useState();
    const [age, setAge] = React.useState();
    const [activite, setActivite] = React.useState("sedentaire");

    const [caloriesMin, setCaloriesMin] = React.useState(-1);
    const [caloriesMax, setCaloriesMax] = React.useState(-1);

    function CalculCalories() {

        let calories, calories_min, calories_max;
        
        if(sexe === "homme") {
            calories = 66.46 + (13.7*poids) + (5*taille) - (6.8*age);
        }
        else if(sexe === "femme") {
            calories = 655.1 + (9.6*poids) + (1.8*taille) - (4.7*age)
        }
        switch(activite) {
            case "sedentaire":
                calories_min = calories*1.3;
                calories_max = calories*1.4;
                break;
            case "normale":
                calories_min = calories*1.5;
                calories_max = calories*1.6;
                break;
            case "sportive":
                calories_min = calories*1.6;
                calories_max = calories*1.8;
                break;
            default:
                console.log("Problème formulaire")
        }
        return[calories_min, calories_max];
    }

    function handleClick() {
        try {
            let [arg1, arg2] = CalculCalories();
            setCaloriesMin(arg1);
            setCaloriesMax(arg2);
        } catch(error) {
            console.log("Erreur : "+error)
        }
    }

    function Resultats() {
        if(caloriesMin > 0 && caloriesMax > 0) {
            return(
                <div>
                    <p>
                    Selon les informations que vous avez saisis, votre métabolisme requiert entre
                    <span className="bold"> {Math.floor(caloriesMin)} </span>
                    <span>et</span>
                    <span className="bold"> {Math.floor(caloriesMax)} kcal </span>
                    <span> quotidiennement pour fonctionner correctement.</span>
                    </p>
                    <br/>
                    <p>Cela correspond à votre métabolisme de base.</p>
                </div>
            )
        }
        return(
            <div>
                Veuillez remplir le formulaire et lancer le calcul pour afficher les résultats.
            </div>
        )
    }

    return(
        <div className="Calculator">
            <header>
                <Banner isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </header>
            <body className="Calculator-body">
                <MenuBox isMenuOpen={isMenuOpen}/>
                <h1>Calculez vos besoins énergétiques journaliers :</h1>
                <div className="Calculator-body-main">
                    <Formulaire
                    sexe={sexe} setSexe={setSexe}
                    taille={taille} setTaille={setTaille}
                    poids={poids} setPoids={setPoids}
                    age={age} setAge={setAge}
                    activite={activite} setActivite={setActivite}
                    />
                    <div className="Resultats-side">
                        <div className="Resultats">
                            <Resultats/>
                        </div>
                        <button className="Calculer-button" onClick={handleClick}>
                            Lancer le calcul
                        </button>
                    </div>
                </div>
            </body>
            <Footer/>
        </div>
    )
}