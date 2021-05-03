import './AnimMenuButton.css'
import React from 'react'

function AnimMenuButton() {
    const [anim, setAnim] = React.useState(0);
    const [isMenuOpen, setIsMenuOpen] = React.useState(0);
    const handleOnClick = () => {
        if (isMenuOpen == 0) {
            setIsMenuOpen(1);
            setAnim(1);
        }
        else {
            setIsMenuOpen(0);
            setAnim(2);
        }
    }
    return(
        <div id="menubleft" className="menubside" onClick={handleOnClick}>
            <div className="menusticks" id="upperstick"
            onAnimationEnd={() => setAnim(0)}
            anim = {anim} 
            isMenuOpen = {isMenuOpen}
            />
            <div className="menusticks" id="middlestick"
            anim = {anim} 
            isMenuOpen = {isMenuOpen}
            />
            <div className="menusticks" id="bottomstick"
            anim = {anim} 
            isMenuOpen = {isMenuOpen}
            />
        </div>
    )
}

export default AnimMenuButton;