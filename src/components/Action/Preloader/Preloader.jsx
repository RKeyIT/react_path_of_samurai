import styles from './Preloader.module.css'
import React from "react";
import PreloaderIMG from "../../../img/Spin-1s-200px.svg";

const Preloader = () => {
    return (
        <>
            <img className={styles.preloader} src={PreloaderIMG} alt="preloader image"/>
        </>
    )
}

export default Preloader