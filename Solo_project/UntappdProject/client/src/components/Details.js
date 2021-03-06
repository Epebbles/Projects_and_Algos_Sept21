import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Details = (props) => {
    const {beerId} = props;
    const [beerInfo, setBeerInfo] = useState({});

    useEffect (() => {
        axios.get("http://localhost:8000/api/beers/" + beerId)
            .then((res) => setBeerInfo({
                ...res.data
                }))
            .catch((err) => console.log(err.response))
    }, []);
    
    return (
        <>
            {beerInfo ? (
                <div className="table">
                    <h1>Untappd Details</h1>
                    <p><Link to={"/beers"}>Home Page</Link></p>
                    <hr/>
                    <h3>Details about: {beerInfo.name}</h3>
                    
                    <table>
                        <thead>
                            <th>
                                <tr><img src={beerInfo.photoUrl} alt="" /></tr>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <tr>Beer Style: {beerInfo.style}</tr>
                                <tr>Brewery: {beerInfo.brewery}</tr>
                                <tr>Description: {beerInfo.description}</tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1>Are you feeling thirsty?</h1>
            )}
        </>
    );
};

export default Details