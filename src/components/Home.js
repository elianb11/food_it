import Illustration from './ressources/illustration.png';
import './Home.css';
import Banner from './Banner';
import MenuBox from './MenuBox';
import Formulaire from './Formulaire';
import Footer from './Footer'
import React from 'react'


export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(0);

    const [sexe, setSexe] = React.useState("homme");
    const [taille, setTaille] = React.useState();
    const [poids, setPoids] = React.useState();
    const [age, setAge] = React.useState();
    const [activite, setActivite] = React.useState("sedentaire");

    const [calories, setCalories] = React.useState(-1);

    function CalculCalories() {

        let caloriesLocal;
        if(sexe === "homme") {
            caloriesLocal = 66.46 + (13.7*poids) + (5*taille) - (6.8*age);
        }
        else if(sexe === "femme") {
            caloriesLocal = 655.1 + (9.6*poids) + (1.8*taille) - (4.7*age)
        }
        switch(activite) {
            case "sedentaire":
                setCalories(caloriesLocal*1.35);
                break;
            case "normale":
                setCalories(caloriesLocal*1.55);
                break;
            case "sportive":
                setCalories(caloriesLocal*1.7);
                break;
            default:
                console.log("Problème formulaire")
        }
    }

    function handleChange() {
        try {
            CalculCalories();
        } catch(error) {
            console.log("Erreur : "+error)
        }
    }
    
    return (
        <div className="Home">
            <header>
                <Banner isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </header>
            <body className="Home-body">
                <MenuBox isMenuOpen={isMenuOpen}/>
                <div className="Home-body-main">
                    <div>
                        <h1>
                            Trouvez votre <span className="purple">Recette Idéale</span><br/>
                            En <span className="yellow">Quelques Clics</span> seulement !
                        </h1>
                        <p className="label">Remplissez ce formulaire pour personnaliser la recherche :</p>
                        <Formulaire
                        sexe={sexe} setSexe={setSexe}
                        taille={taille} setTaille={setTaille}
                        poids={poids} setPoids={setPoids}
                        age={age} setAge={setAge}
                        activite={activite} setActivite={setActivite}
                        />
                    </div>
                    <img src={Illustration} alt="foodit-cooking-robot-illustration"/>
                </div>
            </body>
            <Footer/>
        </div>
    );
}