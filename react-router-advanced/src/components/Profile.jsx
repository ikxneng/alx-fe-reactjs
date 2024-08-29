import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";

const Profile = () => {
    const { userId } = useParams();
    const user = {id: userId, name: `User ${userId}`, bio: 'Sample bio for the user'}

    return(
        <div>
            <h2>{user.name}'s Profile</h2>
            <p>ID: {user.id}</p>
            <p>Bio: {user.bio}</p> 
            <nav>
                <ul>
                    <li><Link to='details'>Profile Details</Link></li>
                    <li><Link to='settings'>Profile Settings</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Profile;