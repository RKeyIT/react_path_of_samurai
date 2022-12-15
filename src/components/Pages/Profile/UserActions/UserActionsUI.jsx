import React from 'react'
import styles from './UserActions.module.css'
import Button from "../../../Action/Button/Button";
import ActionButtonsUI from "./ActionButtons/ActionButtonsUI";

const UserActionsUI = (props) => {
    const textAreaFieldLink = React.createRef()
    const createPost = () => props.createPost()
    const textAreaUpdate = () => {
        props.textAreaUpdate(textAreaFieldLink.current.value);
    }
    const textAreaValue = () => props.state.textAreaText


    return (
        <div className={styles.UserActions}>
            <div className={styles.buttonsField}>
                <ActionButtonsUI />
            </div>
            <div className={styles.textAreaField}>
                <textarea name=''
                          className={styles.textArea}
                          ref={textAreaFieldLink}
                          placeholder={'Enter something...'}
                          value={textAreaValue()}
                          onChange={textAreaUpdate}/>
                <Button callback={createPost}
                        text="SEND"
                        buttonWrapper={styles.buttonWrapper}
                        button={styles.button}
                />
            </div>
        </div>
    )
}

export default UserActionsUI