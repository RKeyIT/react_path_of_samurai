import React from 'react';
import styles from './Comments.module.css'

const Comments = (props) => {
    return (
        <span className={styles.Comments}>
            Comments <span>({props.comments})</span>
        </span>
    );
};

export default Comments;
