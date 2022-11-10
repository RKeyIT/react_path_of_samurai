import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="container">
                    <div className="header-content">
                        <div className="logotype"></div>
                        <div className="header-menu">
                            <ul className="header-menu-list">
                                <li className="header-menu-list-item">1</li>
                                <li className="header-menu-list-item">2</li>
                                <li className="header-menu-list-item">3</li>
                                <li className="header-menu-list-item">4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
}

export default Header