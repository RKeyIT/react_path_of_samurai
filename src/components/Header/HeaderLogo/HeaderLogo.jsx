import React from 'react';
import styles from './HeaderLogo.module.css';
import {NavLink} from "react-router-dom";

const HeaderLogo = () => {
    return <NavLink to='/profile' ><div className={styles.logotype}></div></NavLink>;
};

export default HeaderLogo;
