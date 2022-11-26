import React from "react";
import styles from './Textarea.module.css'

const Textarea = (props) => {
    return (
        <textarea ref={props.ref} name={props.name} id={props.id} cols={props.cols} rows={props.rows}></textarea>
    )
}

export default Textarea