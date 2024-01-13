import './navmenu.css';
import { Link } from 'react-router-dom';

export default function NavMenu({ setIsOpen }) {
    return (
        <div id='navmenu'>
            <Link onClick={() => setIsOpen(prev => !prev)} to='/'>Home</Link>
            <Link onClick={() => setIsOpen(prev => !prev)} to='about'>About</Link>
            <Link onClick={() => setIsOpen(prev => !prev)} to='contact'>Inquire</Link>
            <Link onClick={() => setIsOpen(prev => !prev)} to='portfolio'>Portfolio</Link>
            <Link onClick={() => setIsOpen(prev => !prev)} to='offerings'>Offerings</Link>
        </div>
    );
}

