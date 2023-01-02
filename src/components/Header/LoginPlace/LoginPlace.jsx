import React from "react";
import styles from './LoginPlace.module.css'
import HeaderMenuItem from "../HeaderMenu/HeaderMenu_Item/HeaderMenuItem";

const LoginPlace = (props) => {
    console.log(props)
    return (
        <>
            <div className={styles.loginPlace}>
                            <HeaderMenuItem name={'Login'} link={'/login'}/>
                            <HeaderMenuItem name={'Registration'} link={'/registration'}/>
            </div>
        </>
    )
}

export default LoginPlace