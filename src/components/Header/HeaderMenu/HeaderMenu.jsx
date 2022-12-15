import React from 'react';
import styles from './HeaderMenu.module.css';
import HeaderMenuItem from './HeaderMenu_Item/HeaderMenuItem';
import Button from "../../Action/Button/Button";

const HeaderMenu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                <HeaderMenuItem name='Learnings' link='/learnings' />
                <HeaderMenuItem name='Teaching' link='/teaching' />
                <HeaderMenuItem name='Content' link='/content' />
                <HeaderMenuItem name='Donate' link='/donate' />
            </ul>
            <Button text="Hide/Show Menu" button={styles.button} buttonWrapper={styles.buttonWrapper}/>
        </div>
    );
};

export default HeaderMenu;
