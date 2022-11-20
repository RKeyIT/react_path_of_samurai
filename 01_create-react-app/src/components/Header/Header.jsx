import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            {/*<div className='container'>*/}
                    <HeaderLogo />
                    <HeaderMenu />
            {/*</div>*/}
        </header>
    );
};

export default Header;
