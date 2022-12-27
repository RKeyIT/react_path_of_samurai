import styles from './Preloader.module.css'
import React from "react";
import PreloaderIMG from "../../../img/Spin-1s-200px.svg";

const Preloader = () => {
    // TODO: ВЫНЕСТИ ПРЕЛОАДЕР ИЗ ВСЕХ КОМПОНЕНТОВ НАРУЖУ И ОТЦЕНТРИРОВАТЬ
    return (
        <>
            <img className={styles.preloader} src={PreloaderIMG} alt="preloader"/>
        </>
    )
}

export default Preloader