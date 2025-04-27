import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="left-section">
                <div className="overlay">
                    <img src="./image/logo.png" alt="Logo" className="logo" />
                    <h2>
                        Welcome to 
                        <span> TechLambdas<br /> PVT Ltd</span>
                    </h2>
                </div>
            </div>
            <div className="right-section">
                <div className="login-form">
                    <h2>Welcome Back !</h2>
                    <h3>Sign in to</h3>
                    <p>Lorem Ipsum is simply</p>
                    <form>
                        <label htmlFor="username">User name</label>
                        <input type="text" id="username" placeholder="Enter your user name" />

                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your Password"
                            />
                            <span className="toggle-password" onClick={togglePassword}>
                                {showPassword ? '🙈' : '👁️‍🗨️'}
                            </span>
                        </div>

                        <button type="submit" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
