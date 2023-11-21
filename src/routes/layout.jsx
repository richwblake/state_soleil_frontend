import Navbar from '../components/navbar';
import NavMenu from '../components/navmenu';
import Footer from '../components/footer';
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
                    <Footer />
                </>
            )}
        </div>
    );
}

