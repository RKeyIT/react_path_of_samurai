import React from "react";

const Textarea = (props) => {
    return (
        <textarea
            ref={props.ref} name={props.name} id={props.id}
            cols={props.cols} rows={props.rows}
            onChange={console.log}
            value={props.actions.textArea.text}
        />
    )
}

export default Textarea