import './App.css';
import Home from './Home'
import Calculator from './Calculator'
import ResultPage from './ResultPage'
import RecipePage from './RecipePage'
import React from 'react'
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from './ScrollToTop'

function App() {
    
    return (
        <Router>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/calculator" component={Calculator}/>
                <Route exact path="/results" component={ResultPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recipe" component={RecipePage}/>
            </Switch>
        </Router>
    );
}

export default App;