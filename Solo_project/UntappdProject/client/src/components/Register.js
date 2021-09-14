import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

const Register = () => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errs, setErrs] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const register = async (e) => {
        e.preventDefault();
        setErrs("");
        setSuccessMsg("");
        const postData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        axios.post("http://localhost:8000/api/user/register", postData, {
            withCredentials: true,
        })
        .then((response) => {
            console.log(response.cookie);
            console.log(response);
            setSuccessMsg(response.data.message)
            navigate("/loginreg");
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data);
            setErrs(err.response.data.error);
        });
    };
    return (
        <form onSubmit={register}>
            <h1>Register</h1>
            {errs && <h3 style={{ color: "red" }}>{errs}</h3>}
            {successMsg.length > 0 && (
                <h3 style={{ color: "green" }}>{successMsg}</h3>
            )}
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

            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;