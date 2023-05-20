import React from 'react';
import './Post.css'
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Post;