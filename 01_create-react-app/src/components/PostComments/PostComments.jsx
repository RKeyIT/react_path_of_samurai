import React from 'react';

const PostComments = (props) => {
    return (
        <span>
            Comments <span>({props.comments})</span>
        </span>
    );
};

export default PostComments;
