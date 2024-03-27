// Navbar.jsx
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
            smooth: true,
            duration: 500,
            offset: -50,
        });
    };

    return (
        <nav>
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                
            </div>
        </nav>
    );
};

export default Navbar;
