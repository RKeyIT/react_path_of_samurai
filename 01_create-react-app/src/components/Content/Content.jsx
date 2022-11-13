import React from 'react';
import Statusbar from '../Statusbar/Statusbar';
import UserPage from '../UserPage/UserPage';
import UserWall from '../UserWall/UserWall';
import styles from './Content.module.css';

const Content = () => {
    return (
        <div className={styles.Content}>
            <Statusbar />
            <UserPage />
            <UserWall />
        </div>
    );
};

export default Content;
