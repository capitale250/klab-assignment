import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login({ setLogoutUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    // let navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3000/auth/login", {
            email,
            password,
          })
          .then((response) => {
            console.log("response", response);
            localStorage.setItem(
              "userData",
              JSON.stringify({
                userLoggedIn: true,
                token: response.data.access_token,
              })
            );
            setError("");
            setEmail("");
            setPassword("");
            // setLogoutUser(false);
            // navigate("/dashboard");
          })
          .catch((error) => setError(error.message));
      };

    return (
        <div className="small-container">
             <form onSubmit={login}>
                <h1>Login</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Login" />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <p>Don't have an account?</p>
                    {/* <Link to={'/register'}>register!</Link> */}
                </div>
            </form>
        </div>
    );
}

export default Login;