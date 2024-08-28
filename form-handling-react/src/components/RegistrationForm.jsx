import React from 'react';
import { useState } from 'react';

const RegistrationForm = () =>{
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted', formData);
    
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} required/>

            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' name='password' value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Register</button>

        </form>
    );

};

export default RegistrationForm;
