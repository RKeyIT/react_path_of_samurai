import React from 'react';
import './Presentation.css';

const UserPresentation = () => {
    return (
        <div className='user-presentation'>
            <div className='user-avatar'>user-avatar</div>
            <div className='user-description'>
                <div className='user-name'>user-name</div>
                <div className='user-info'>
                    <div className='user-birth'>
                        <span>Age: </span>
                        <span className='user-age'>user-age</span>
                    </div>
                    <div className='user-location'>
                        <span>City: </span>
                        <span className='user-city'>user-city</span>
                    </div>
                    <div className='user-education'>
                        <span>Education: </span>
                        <span className='user-education-option'>
                            user-education-option
                        </span>
                    </div>
                    <div className='user-site'>
                        <span>Site: </span>
                        <span className='user-site-link'>user-site-link</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPresentation;
