import React from "react";
import { Outlet, Link, useParams, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from './ProfileSettings'
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
                    <Routes>
                    <li><Route path='/details' element={<ProfileDetails />} />Profile Details </li>
                    <li><Route to='settings' element={<ProfileSettings />}/> Profile Settings</li>
                    </Routes>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Profile;
