import './navbar.css';
import Hamburger from 'hamburger-react';
import { useLocation } from 'react-router-dom';

export default function Navbar({ isOpen, setIsOpen }) {

    const location = useLocation();
    const { pathname } = location;

    return (
        <div id='navbar'>
            <div className={isOpen ? "hidden" : "show"} id='nav-text'>
                <span id='logo'>STATE SOLEIL</span>
                <p id="path-title">{pathname.substring(1)}</p>
            </div>
            <Hamburger id='navmenu-btn' toggled={isOpen} toggle={setIsOpen} />
        </div>
    );
}

