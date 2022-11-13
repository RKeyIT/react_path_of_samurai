import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.content}>
                    <HeaderLogo />
                    <HeaderMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
