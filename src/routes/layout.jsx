import Navbar from '../components/navbar';
import NavMenu from '../components/navmenu';
import { useState } from 'react';
import './layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div id='layout'>
            <Navbar isOpen={navOpen} setIsOpen={setNavOpen} />
            {navOpen ? (
                <NavMenu setIsOpen={setNavOpen} />
            ) : (
                <>
                    <Outlet />
                    <h1>footer</h1>
                </>
            )}
        </div>
    );
}

