import React from 'react';

function Navigation () {
    return (
        <nav className='navigation'>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/profil">Profil</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
