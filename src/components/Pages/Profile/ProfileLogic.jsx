import React from 'react';
import ProfileUI from "./ProfileUI";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";

class ProfileLogic extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state) => ({
    profile_id: state.profilePage.profile_id,
})

export default connect(mapStateToProps, {setUserProfile, })(ProfileLogic);
