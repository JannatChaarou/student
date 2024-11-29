import React from 'react';
import logo from './logo.jpg'; 
import Navigation from '../Navigation/navigation';
function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Student Profile Page Design</h1>
            <Navigation/>
        </header>
    );
}

export default Header;
