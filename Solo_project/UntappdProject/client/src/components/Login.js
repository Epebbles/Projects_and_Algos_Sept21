import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const login = (e) => {
        e.preventDefault();
        setErrMsg("");
        setSuccessMsg("");

        const postData = { email, password };
        axios.post("http://localhost:8000/api/user/login", postData, {
            withCredentials: true,
        })
        .then((response) => {
            console.log(response.cookie);
            console.log(response);
            setSuccessMsg(response.data.message)
            navigate("/beers");
        })
        .catch((err) => {
            console.log(err.response);
            setErrMsg(err.response.data.err)
        });
    };
    
    return(
        <>
            <h1>Login</h1>
            {errMsg && <h3 style={{ color: "red" }}>{errMsg}</h3>}
            {successMsg.length > 0 && (
                <h3 style={{ color: "green" }}>{successMsg}</h3>
            )}
            <form onSubmit={login}>
                <div>
                    <label>Email: </label>
                    <input type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label> Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Sign In</button>

            </form>
        </>
    );
};

export default Login;