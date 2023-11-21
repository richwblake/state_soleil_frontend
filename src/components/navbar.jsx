import './navbar.css';
import Hamburger from 'hamburger-react';

export default function Navbar({ isOpen, setIsOpen }) {
    return (
        <div id='navbar'>
            <span id='logo' className={isOpen ? "hidden" : "show"}>State Soleil</span>
            <Hamburger id='navmenu-btn' toggled={isOpen} toggle={setIsOpen} />
        </div>
    );
}

