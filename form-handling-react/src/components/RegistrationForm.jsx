import React from 'react';
import { useState } from 'react';

const RegistrationForm = () =>{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {username, email, password };
        console.log('Form Data Submitted: ', formData)
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' name='username' value={username} onChange={handleUsernameChange} required/>

            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />

            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' name='password' value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Register</button>

        </form>
    );

};

export default RegistrationForm;
