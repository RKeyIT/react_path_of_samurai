import React from 'react';
import HeaderUI from "./HeaderUI";
import { checkAuthorisationThunk } from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderLogic extends React.Component {
    componentDidMount() {
        checkAuthorisationThunk()
    }
    render() {
        return <HeaderUI {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {})(HeaderLogic)