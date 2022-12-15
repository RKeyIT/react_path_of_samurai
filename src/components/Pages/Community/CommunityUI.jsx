import React from "react";
import styles from './CommunityUI.module.css'
import TopUserUI from "./TopUser/TopUserUI";
import TopUserLogic from "./TopUser/TopUserLogic";

const CommunityUI = (props) => {
    return (
        <div>
            <div className={styles.topUsers}>
                <TopUserLogic />
            </div>
        </div>
    )
}

export default CommunityUI