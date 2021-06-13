import './Login.css';
import Banner from './Banner';
import MenuBox from './MenuBox';
import Footer from './Footer'
import React from 'react'
import {TextInput} from 'evergreen-ui'
import {useHistory} from 'react-router-dom'


export default function Login() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(0);

    const [email, setEmail] = React.useState("");
    const [mdp, setMdp] = React.useState("");

    let history = useHistory();
    
    return (
        <div className="Login">
            <header>
                <Banner isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </header>
            <body className="Login-body">
                <MenuBox isMenuOpen={isMenuOpen}/>
                <div className="Login-body-box">
                    <div className="Login-body-box-in">
                        <p>Connectez-vous avec vos identifiants FOOD IT</p>
                        <ul>
                            <li className="FirstLi">
                                <TextInput 
                                    placeholder="Votre email" 
                                    width="55vh" 
                                    height={45} 
                                    type="email" 
                                    value={email} 
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </li>
                            <li>
                                <TextInput 
                                    placeholder="Votre mot de passe" 
                                    width="55vh" 
                                    height={45} 
                                    type="password" 
                                    value={mdp}
                                    onChange={event => setMdp(event.target.value)}
                                />
                            </li>
                        </ul>
                        <p className="mdp">Mot de passe oublié ?</p>
                        <button 
                        className="b1"
                        onClick={() => {history.push("/")}}
                        >
                            Se connecter
                        </button>
                        <button 
                        className="b2"
                        onClick={() => {history.push("/")}}
                        >
                            Cliquez ici pour créer un compte
                        </button>
                    </div>
                </div>
            </body>
            <Footer/>
        </div>
    );
}