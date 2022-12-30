import React from 'react';
import ProfileUI from "./ProfileUI";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import { useLocation, useNavigate, useParams, } from "react-router-dom";

class ProfileLogic extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ?? '2';
        debugger
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            // .get(`https://social-network.samuraijs.com/api/1.0/profile/`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }
    render() {
        return (
            <ProfileUI {...this.props} profile_id={this.props.profile_id}/>
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
    profile_id: state.profilePage.profile_id,
})

export default connect(mapStateToProps, {setUserProfile, })(withRouter(ProfileLogic));
