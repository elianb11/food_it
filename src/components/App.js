import logo from './ressources/logo.svg';
import './App.css';
import Banner from './Banner';

function App() {
    return (
        <div className="App">
            <header>
                <Banner />
            </header>
            <body className="App-body">
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