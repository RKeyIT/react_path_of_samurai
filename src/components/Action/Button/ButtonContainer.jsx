import React from 'react';
import Button from "./Button";

class ButtonContainer extends React.Component {
    render() {
        return <>
            <Button
                text={this.props.text}
                callback={this.props.callback}
                disabled={this.props.disabled}
            />
        </>
    }
}

export default ButtonContainer
