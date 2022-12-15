import React from 'react';
import styles from './ActionButtons.module.css';
import Button from "../../../../Action/Button/Button";

const ActionButtonsUI = () => {
    return (
        <ul className={styles.list}>
            <Button text="Send message" button={styles.button} buttonWrapper={styles.buttonWrapper}/>
            <Button text="Subscribe" button={styles.button} buttonWrapper={styles.buttonWrapper}/>
            <Button text="Donate" button={styles.button} buttonWrapper={styles.buttonWrapper}/>
            <Button text="Buy mentoring" button={styles.button} buttonWrapper={styles.buttonWrapper}/>
        </ul>
    )
}

export default ActionButtonsUI;