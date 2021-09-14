import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

const Register = () => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");

    const register = async (e) => {
        e.preventDefault();
        const postData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        try {
            await axios.post("http://localhost:8000/api/user/register", postData, {
                withCredentials: true,
            });
            // navigate("/loginreg");
        } catch (err) {
            // console.log("ERROR BLOCK")
            // console.log(err);
            console.log(err.response.data);
            const errorResponse = err.response.data.error;
            setErr(errorResponse);
        }
    };

    const blueStyle = {
        backgroundColor: "#0066b2",
        color: "white",
    }
    
    return (
        <form onSubmit={register}>
            <h1>Register</h1>
            {err && <h3 style={{ color: "red" }}>{err}</h3>}
            <div>
                First Name:{" "}
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            
            <div>
                Last Name:
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                Email:
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                Password:
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                Confirm Password:
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button type="submit" style={blueStyle}>Register</button>
        </form>
    );
};

export default Register;