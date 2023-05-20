import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, phone} = friend;
    return (
        <div>
            <h2>Details About {name}</h2>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetails;