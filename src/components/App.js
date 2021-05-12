import logo from './ressources/logo.svg';
import './App.css';
import Banner from './Banner';
import MenuBox from './MenuBox';
import React from 'react'

function App() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(0);

    return (
        <div className="App">
            <header>
                <Banner isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </header>
            <body className="App-body">
                <MenuBox isMenuOpen={isMenuOpen}/>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Notre site est actuellement en maintenance !
                </p>
                <p>
                    Merci pour votre compréhension.
                </p>
            </body>
        </div>
    );
}

export default App;