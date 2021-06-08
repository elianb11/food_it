import './Footer.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {

    return(
        <div className="Footer">
            <p>Retrouvez-nous aussi sur nos réseaux sociaux !</p>
            <div className="SocialMedia">
                <SocialIcon url="https://pinterest.com/" bgColor="#eff0ff"/>
                <SocialIcon url="https://facebook.com/" bgColor="#eff0ff"/>
                <SocialIcon url="https://instagram.com/" bgColor="#eff0ff"/>
                <SocialIcon url="https://youtube.com/" bgColor="#eff0ff"/>
                <SocialIcon url="https://twitter.com/" bgColor="#eff0ff"/>
            </div>
            <div className="infos">
                <p>Site créé par Benjamin Stach et Elian Belmonte</p>
                <p>Tous droits réservés food-it.fr - 2021-2021</p>
                <p>
                    <span className="infos_hover">Recrutement</span> ● 
                    <span className="infos_hover"> Mentions légales</span> ● 
                    <span className="infos_hover"> Conditions Générales d'Utilisation</span> ● 
                    <span className="infos_hover"> Vos questions</span> ● 
                    <span className="infos_hover"> FAQ</span> ● 
                    <span className="infos_hover"> Contact</span> ● 
                    <span className="infos_hover"> Politique de protection des données personnelles</span> ●
                </p>
                <p>
                    <span className="infos_hover"> Politique de confidentialité</span> ● 
                    <span className="infos_hover"> Préférences cookies</span> ● 
                    <span className="infos_hover"> Foire aux questions - Vos choix concernant l'utilisation de cookies</span>
                </p>
            </div>
        </div>
    );
}