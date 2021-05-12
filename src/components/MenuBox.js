import './MenuBox.css';

export default function MenuBox({isMenuOpen}) {
    return isMenuOpen ? (
        <div className="MenuBox">
            <div className="MenuBox-menu" />
            <div className="OpacityBox" />
        </div>
    ) : (
        <div></div>
    )
}