import React, {useState} from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
const beerStyleOptions = [
    "IPA",
    "Pale Ale",
    "Alt-style",
    "Lager",
    "Red Ale",
    "Porter",
    "Stout",
]

const BeerForm = (props) => {
    const [name, setName] = useState("");
    const [ photoUrl, setPhotoUrl ] = useState("");
    const [ style, setStyle ] = useState("");
    const [ brewery, setBrewery ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ errors, setErrors ] = useState(""); 

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postData = {
            name, photoUrl, style, brewery, description
        }
        axios.post('http://localhost:8000/api/beers/', postData,
            {
                withCredentials: true,
            })
            .then(newBeer => {
                console.log(newBeer)
                setName("");
                setPhotoUrl("");
                setStyle("");
                setBrewery("");
                setDescription("");
                navigate("/beers");
            })
            .catch((err) => {
                console.log("ERROR BLOCK")
                if(err.response.status === 401) {
                    navigate('/login');
                }
                console.log(err.response.data.error)
                const errorResponse = err.response.data.error;
                setErrors(errorResponse);
            });
    }
    const blueStyle = {
        backgroundColor: "#0066b2",
        color: "white",
        width: "120px",
    }

    return (
        <>
            <Link to={"/beers"}> Home Page</Link>
            <hr/>
            <form onSubmit={handleFormSubmit}>
                <p>
                    <label htmlFor="name">Beer Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/><br/>
                </p>
                <p>
                    <label htmlFor="photoUrl">Photo Url: </label>
                    <input type="text" name="photoUrl" onChange={(e) => setPhotoUrl(e.target.value)} value={photoUrl}/><br/>
                </p>
                <p>
                    <label htmlFor="style">Style of Beer: </label>
                    <select 
                        name="style"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        id="style"
                    >
                        {beerStyleOptions.map((style, index) => (
                            <option key={index} value={style}>
                                {style}
                            </option>
                        ))}
                    </select>
                </p>
                <p>
                    <label htmlFor="brewery">Brewery: </label>
                    <input type="text" onChange={(e) => setBrewery(e.target.value)} value={brewery}/><br/>
                </p>
                <p>
                    <label htmlFor="description">Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/><br/>
                </p>
                <hr/>
                <button type="submit" style={blueStyle}>Prost! To you!</button>
            </form>
            {errors ? Object.keys(errors).map((key, index) => (
                <p key={index}>{errors[key].message}</p>
            )) : null}
        </>
    )
}
export default BeerForm;