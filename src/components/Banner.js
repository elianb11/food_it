import logo from './ressources/logo_text.png'
import './Banner.css'
import AnimMenuButton from './AnimMenuButton'

function Banner() {
    return(
        <div className="Banner">
            <AnimMenuButton />
            <div className="sep_head"></div>
            <div>
                <img src={logo} className="Banner-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Banner;