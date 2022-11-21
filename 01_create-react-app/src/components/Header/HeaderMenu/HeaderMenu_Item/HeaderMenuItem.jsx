import React from 'react';
import styles from './HeaderMenuItem.module.css';

const HeaderMenuItem = (props) => {
    return (
        <a href={props.link}>
            <li className={styles.item}>{props.name}</li>
        </a>
    );
};

export default HeaderMenuItem;
