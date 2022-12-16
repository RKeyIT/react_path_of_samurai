import React from 'react';
import styles from './HeaderMenuItem.module.css';
import {NavLink} from "react-router-dom";
import Button from "../../../Action/Button/Button";

const HeaderMenuItem = (props) => {
    return (
        <NavLink to={props.link} className={styles.item}>
            <Button text={props.name} buttonWrapper={styles.buttonWrapper} button={styles.button}/>
        </NavLink>
    );
};

export default HeaderMenuItem;
