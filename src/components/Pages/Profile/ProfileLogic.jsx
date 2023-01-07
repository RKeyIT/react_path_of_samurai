import React from 'react';
import ProfileUI from "./ProfileUI";
import {connect} from "react-redux";
import { setUserProfile } from "../../../redux/profile-reducer";
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import {API} from "../../../api/api";

class ProfileLogic extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ?? '2';
        API.getProfile(userId).then(data => {
                this.props.setUserProfile(data)
            });
    }
    render() {
        return (
            <ProfileUI {...this.props} profile={this.props.profile}/>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile, })(withRouter(ProfileLogic));
