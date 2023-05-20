import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {userId, id, title, body} = postDetails;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h2>This is Post Details of {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Author</button>
        </div>
    );
};

export default PostDetails;