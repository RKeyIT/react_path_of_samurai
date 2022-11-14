import React from 'react';
import styles from './Main.module.css';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className='container'>
                <div className={styles.grid_container}>
                    <Navbar />
                    <Profile />
                </div>
            </div>
        </main>
    );
};

export default Main;
