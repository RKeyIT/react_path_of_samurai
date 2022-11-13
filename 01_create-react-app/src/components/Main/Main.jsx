import React from 'react';
import styles from './Main.module.css';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className='container'>
                <div className={styles.grid_container}>
                    <Navbar />
                    <Content />
                </div>
            </div>
        </main>
    );
};

export default Main;
