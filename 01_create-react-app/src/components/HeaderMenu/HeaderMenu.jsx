import React from 'react';
import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.menu_list}>
                <li className={styles.list_item}>Learnigns</li>
                <li className={styles.list_item}>Teaching</li>
                <li className={styles.list_item}>Content</li>
                <li className={styles.list_item}>Donate</li>
            </ul>
        </div>
    );
};

export default HeaderMenu;
