import React from 'react';
import styles from './Header.module.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import LoginPlace from "./LoginPlace/LoginPlace";

const HeaderUI = (props) => {
    return (
        <header className={styles.header}>
            {
                props.isAuth ? `${props.login} | logout` : <LoginPlace/>
            }
            <HeaderMenu />
        </header>
    );
};

export default HeaderUI;
