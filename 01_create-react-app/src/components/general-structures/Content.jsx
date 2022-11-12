import React from 'react';
import PostWall from '../minor-structures/PostWall/PostWall';
import UserPresentation from '../minor-structures/Presentation/Presentation';
import Statusbar from '../minor-structures/Statusbar/Statusbar';
import './Content.css';

const Content = () => {
    return (
        <div className='Content'>
            <Statusbar />
            <UserPresentation />
            <PostWall />
        </div>
    );
};

export default Content;
