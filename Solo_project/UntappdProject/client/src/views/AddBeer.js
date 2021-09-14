import React, {useState} from 'react'
import BeerForm from '../components/BeerForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const AddBeer = () => {
    const [errors, setErrors] = useState([]);

    const submitFunction = (beer) => {
        axios.post('http://localhost:8000/api/beers/', beer)
            .then(newBeer => {
                console.log(newBeer);
                navigate("/beers")
            })
            .catch((err) => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            });
    }
    return (
        <div>
            <h1>Add a new Beer!</h1>
            <BeerForm />
        </div>
    )
}

export default AddBeer;