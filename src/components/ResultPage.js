import './ResultPage.css';
import Banner from './Banner';
import MenuBox from './MenuBox';
import React from 'react'
import RecipeList from './RecipeList'
import Footer from './Footer'

export default function ResultPage(props) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(0);
    console.log(props)
    
    return (
        <div className="ResultPage">
            <header>
                <Banner isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </header>
            <body className="ResultPage-body">
                <MenuBox isMenuOpen={isMenuOpen}/>
                <RecipeList params={props.location.state.params}/>
            </body>
            <Footer/>
        </div>
    );
}