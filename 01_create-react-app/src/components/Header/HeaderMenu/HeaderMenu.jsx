import React from 'react';
import styles from './HeaderMenu.module.css';
import HeaderMenuItem from './HeaderMenu_Item/HeaderMenuItem';

const HeaderMenu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                <HeaderMenuItem name='Learnings' link='/learnings' />
                <HeaderMenuItem name='Teaching' link='/teaching' />
                <HeaderMenuItem name='Content' link='/content' />
                <HeaderMenuItem name='Donate' link='/donate' />
            </ul>
        </div>
    );
};

export default HeaderMenu;
