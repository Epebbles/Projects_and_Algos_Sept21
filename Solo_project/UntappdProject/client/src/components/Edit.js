import React, { useEffect, useState } from "react";
import axios from "axios";
import BeerForm from "./BeerForm";
import { navigate } from "@reach/router";

const Edit = (props) => {
    const {beerId} = props;
    const [beer, setBeer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8000/api/beers/" + beerId)
            .then(res => {
                setBeer(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log("What are you doing???")
                setLoaded(true);
                console.log(err);
            })
    }, []);

    const editBeer = (beer) => {
        axios.put("http://localhost:8000/api/beers/" + beerId, beer)
            .then(res => {
                console.log("Update Successful");
                console.log(beer.name);
                console.log(res);
                navigate("/beers")
            })
            .catch(err => {
                console.log("This form has errors")
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            });
    }

    const deleteBeer = (beerId) => {
        axios.delete('http://localhost:8000/api/beers/' + beerId)
            .then(res => {
                console.log("You have successfully removed this beer");
                console.log(res);
                navigate("/beers");
            })
            .catch((err) => {
                console.log(err)
                const errorResponse = err.response.data.errors
                setErrors(errorResponse);
            });
    }
    const redStyle = {
        backgroundColor: "red",
        color: "white"
    }


    return (
        <div className="table">
            <h1>Edit {beer.name}</h1>
            {loaded && (
                <BeerForm
                    onSubmitFunction={editBeer}
                    name={beer.name}
                    photoUrl={beer.photoUrl}
                    style={beer.style}
                    brewery={beer.brewery}
                    description={beer.description}
                />      
            )}
            <div>
                <button onClick={()=>deleteBeer(beer._id)} style={redStyle}>Delete {beer.name}?</button>
            </div>
        </div>
    )
}

export default Edit;