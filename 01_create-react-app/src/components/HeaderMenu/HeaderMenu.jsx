import React from 'react';
import styles from './HeaderMenu.module.css';
import HeaderMenuItem from './HeaderMenu_Item/HeaderMenuItem';

const HeaderMenu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                <HeaderMenuItem name='Learnings' link='#' />
                <HeaderMenuItem name='Teaching' link='#' />
                <HeaderMenuItem name='Content' link='#' />
                <HeaderMenuItem name='Donate' link='#' />
            </ul>
        </div>
    );
};

export default HeaderMenu;
