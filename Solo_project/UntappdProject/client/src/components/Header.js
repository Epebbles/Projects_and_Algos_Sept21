import React from "react";
import { Link, navigate } from '@reach/router';
import axios from "axios";

const Header = (props) => {
    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/loginreg");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const blueStyle = {
        backgroundColor: "#0066b2",
        color: "white",
        width: "120px",
    }

    return (
        <div className="header">
            <h1>Welcome to Untappd </h1>
            <Link to="/beers">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6ExJN1TgwFUqGaDVg19zLAAAAA%26pid%3DApi&f=1" alt="logo" className="logo" />
            </Link>
            <button onClick={(e) => logout(e)} style={blueStyle}>Logout</button>
            <hr/>
        </div>
    )
};

export default Header;