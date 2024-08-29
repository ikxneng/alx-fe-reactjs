// import isAuthenticated from './components/Auth';
import React from "react";

const Login = () =>{
    const handleLogin = () => {
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/profile'
    };
    return <button onClick={handleLogin}>Login</button>;
}

export default Login;