import './MenuBox.css';
import React from 'react'
import {useHistory} from 'react-router-dom'
import { TagInput } from 'evergreen-ui'

export default function MenuBox(props) {

    let history = useHistory();

    const [values, setValues] = React.useState([])

    function BasicTagInputExample() {
        return (
            <TagInput
            inputProps={{ placeholder: 'Ajouter des ingrédients...' }}
            values={values}
            height="40"
            onChange={values => {
                setValues(values)
            }}
            />
        )
        }
    
    return props.isMenuOpen ? (
        <div className="MenuBox" isMenuOpen={props.isMenuOpen} >
            <div className="MenuBox-menu" isMenuOpen={props.isMenuOpen}>
                <div className="Panel">
                    <p>Recettes par catégorie</p>
                    <ul>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Breakfast"})}}>Petit-déjeuner</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Starter"})}}>Entrées</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Side"})}}>Accompagnements</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Pasta"})}}>Pâtes</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Beef&c=Chicken&c=Pork&c=Lamb"})}}>Viandes</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Seafood"})}}>Fruit de mers</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Dessert"})}}>Desserts</li>
                    </ul>
                </div>
                <div className="Panel-separator"/>
                <div className="Panel">
                    <p>Recettes par régime alimentaire</p>
                    <ul>
                        <li>Sans gluten</li>
                        <li>Cétogène</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Vegetarian"})}}>Végétarien</li>
                        <li>Lacto-végétarien</li>
                        <li>Ovo-végétarien</li>
                        <li onClick={() => {history.push("/results",{params:"filter.php?c=Vegan"})}}>Végétalien</li>
                        <li>Pescétarien</li>
                        <li>Paléo</li>
                        <li>Primitif</li>
                    </ul>
                </div>
                <div className="Panel-separator"/>
                <div className="Panel">
                    <p>Recettes selon les intolérances</p>
                    <ul>
                        <li>Lait</li>
                        <li>Œuf</li>
                        <li>Gluten</li>
                        <li>Grains</li>
                        <li>Cacahuètes</li>
                        <li>Fruit de mers</li>
                        <li>Sésame</li>
                        <li>Soja</li>
                        <li>Blé</li>
                    </ul>
                </div>
                <div className="Panel-separator"/>
                <div className="Panel">
                    <p>Outils</p>
                    <ul>
                        <li onClick={() => {history.push("/calculator")}}>Calcul des besoins énergétiques</li>
                        <li onClick={() => {history.push("/login")}}>Gestion du compte</li>
                        <li>
                            <span>Recherche par ingrédients :</span>
                        </li>
                        <li>
                            <BasicTagInputExample/>
                        </li>
                        <li>
                            <button 
                            className="Recherche"
                            onClick={() => {history.push("/results",{params:"filter.php?i="+values[0]})}}
                            >Rechercher</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="OpacityBox"/>
        </div>
    ) : (
        <div>
        </div>
    )
}