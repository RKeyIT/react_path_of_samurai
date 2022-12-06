import React from 'react';
import ProfileUI from "./ProfileUI";

const ProfileLogic = (props) => {
    return (
        <div>
            <ProfileUI store={props.store}/>
        </div>
    );
};

export default ProfileLogic;
