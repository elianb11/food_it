import './App.css';
import Home from './Home'
import Calculator from './Calculator'
import ResultPage from './ResultPage'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/calculator" component={Calculator}/>
                <Route exact path="/results" component={ResultPage}/>
            </Switch>
        </Router>
    );
}

export default App;