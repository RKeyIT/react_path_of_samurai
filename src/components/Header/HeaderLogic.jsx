import React from 'react';
import HeaderUI from "./HeaderUI";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import { API } from "../../api/api";

class HeaderLogic extends React.Component {
    componentDidMount() {
        API.checkAuthorisation().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
            });
    }
    render() {
        return <HeaderUI {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {setUserData})(HeaderLogic)