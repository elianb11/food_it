import './MenuBox.css';
import React from 'react'
import {useHistory} from 'react-router-dom'

export default function MenuBox(props) {

    let history = useHistory();
    
    return props.isMenuOpen ? (
        <div className="MenuBox" isMenuOpen={props.isMenuOpen} >
            <div className="MenuBox-menu" isMenuOpen={props.isMenuOpen}>
                <div className="Panel">
                    <p>Recettes par catégorie</p>
                    <ul>
                        <li onClick={() => {history.push("/results",{params:"c=Breakfast"})}}>Petit-déjeuner</li>
                        <li onClick={() => {history.push("/results",{params:"c=Starter"})}}>Entrées</li>
                        <li onClick={() => {history.push("/results",{params:"c=Side"})}}>Accompagnements</li>
                        <li onClick={() => {history.push("/results",{params:"c=Pasta"})}}>Pâtes</li>
                        <li onClick={() => {history.push("/results",{params:"c=Beef&c=Chicken&c=Pork&c=Lamb"})}}>Viandes</li>
                        <li onClick={() => {history.push("/results",{params:"c=Seafood"})}}>Fruit de mers</li>
                        <li onClick={() => {history.push("/results",{params:"c=Dessert"})}}>Desserts</li>
                    </ul>
                </div>
                <div className="Panel-separator"/>
                <div className="Panel">
                    <p>Recettes par régime alimentaire</p>
                    <ul>
                        <li>Sans gluten</li>
                        <li>Cétogène</li>
                        <li onClick={() => {history.push("/results",{params:"c=Vegetarian"})}}>Végétarien</li>
                        <li>Lacto-végétarien</li>
                        <li>Ovo-végétarien</li>
                        <li onClick={() => {history.push("/results",{params:"c=Vegan"})}}>Végétalien</li>
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
                        <li>Recherche par ingrédients</li>
                        <li onClick={() => {history.push("/calculator")}}>Calcul des besoins énergétiques</li>
                        <li>Gestion du compte</li>
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