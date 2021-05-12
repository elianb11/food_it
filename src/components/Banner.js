import logo from './ressources/logo_text.png'
import burgerLogo from './ressources/logo.svg'
import './Banner.css'
import AnimMenuButton from './AnimMenuButton'
import {SearchInput} from 'evergreen-ui'
import {PersonIcon} from 'evergreen-ui'
import React from 'react';

function Banner({isMenuOpen, setIsMenuOpen}) {
    return(
        <div className="Banner">
            <AnimMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="Separator" />
            <img src={logo} className="Banner-logo" alt="logo" />
            <img src={burgerLogo} className="Banner-logo burger" alt="logo" />

            <div className="Search-input">
                <SearchInput placeholder="Je cherche..." width="100%" height={40}/>
            </div>
            <div className="Separator" />
            <button className="Connexion-button">
                <PersonIcon marginRight={10} size={15}/>
                Connexion
            </button>
        </div>
    );
}

export default Banner;