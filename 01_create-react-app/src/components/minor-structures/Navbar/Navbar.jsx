import React from 'react';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <ul className='Navbar-list'>
                <a href='#0' className='Navbar-link-container'>
                    <li className='Navbar-list-item'>Profile</li>
                </a>
                <a href='#0' className='Navbar-link-container'>
                    <li className='Navbar-list-item'>Messages</li>
                </a>
                <a href='#0' className='Navbar-link-container'>
                    <li className='Navbar-list-item'>News</li>
                </a>
                <a href='#0' className='Navbar-link-container'>
                    <li className='Navbar-list-item'>Music</li>
                </a>
                <a href='#0' className='Navbar-link-container'>
                    <li className='Navbar-list-item'>Settings</li>
                </a>
            </ul>
        </nav>
    );
};

export default Navbar;
