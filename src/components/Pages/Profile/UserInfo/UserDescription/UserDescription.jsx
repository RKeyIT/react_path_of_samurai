import React from "react";
import styles from './UserDescription.module.css'
import TitlesList from "./TitlesList/TitlesList";
import Button from "../../../../Action/Button/Button";

const UserDescription = () => {
    return (
        <div className={styles.UserDescription}>
            <div className={styles.userName}>
                Adam Kioning
            </div>
            <TitlesList />
            <Button text='More about Adam...'
                    buttonWrapper={styles.buttonWrapper}
                    button={styles.button}/>
        </div>
    )
}

export default UserDescription