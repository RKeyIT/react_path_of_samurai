import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    // Button receives from props:
    // 1. callback function - action
    // 2. text on button
    return <button onClick={props.callback} className={styles.button}>{props.text}</button>;
};

export default Button;
