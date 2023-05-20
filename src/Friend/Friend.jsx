import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,email,phone,username} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><small>Username: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;