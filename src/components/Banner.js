import logo from './ressources/logo_text.svg'
import burgerLogo from './ressources/logo.svg'
import './Banner.css'
import AnimMenuButton from './AnimMenuButton'
import {SearchInput} from 'evergreen-ui'
import {PersonIcon} from 'evergreen-ui'
import React from 'react';
import {useHistory} from 'react-router-dom'

function Banner({isMenuOpen, setIsMenuOpen}) {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    const [searchValue, setSearchValue] = React.useState("")

    function handleKeyDown(e) {
        if(e.key === 'Enter' && searchValue != ""){
            history.push("/results",{params:"search.php?s="+searchValue});
        }
    }

    return(
        <div className="Banner">
            <AnimMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="Separator" />
            <div onClick={handleClick}>
                <img src={logo} className="Banner-logo" alt="logo" />
                <img src={burgerLogo} className="Banner-logo burger" alt="logo" />
            </div>
            <div className="Search-input">
                <SearchInput 
                    placeholder="Je cherche..." 
                    width="100%" 
                    height={40}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onKeyDown={e => handleKeyDown(e)}
                    />
            </div>
            <div className="Separator" />
            <button 
            className="Connexion-button"
            onClick={() => {history.push("/login")}}
            >
                <PersonIcon marginRight={10} size={15}/>
                Connexion
            </button>
        </div>
    );
}

export default Banner;