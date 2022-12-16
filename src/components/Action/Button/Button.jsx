import React from 'react';
import styles from './Button.module.css';
import {DoubleStyleClasses} from "../../../GlobalLogic";

const Button = (props) => {
    // Button receives from props:
    // 1. callback function - action
    // 2. text on button

    return (
        <div className={DoubleStyleClasses(props.buttonWrapper, styles.wrapper)}>
            <button className={DoubleStyleClasses(props.button, styles.button)}
                    onClick={props.callback}>
                {props.text}
            </button>
        </div>
    )

};

export default Button;
