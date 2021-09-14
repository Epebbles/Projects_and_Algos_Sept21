import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const AllBeers = (props) => {
    const {beerId} = props;
    const [ beers, setBeers ] = useState([]);
    const [beerInfo, setBeerInfo] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/beers')
            .then(res => {
                setBeers(res.data);
                setLoaded(true);
            });
    }, []);

    const Logout = (e) => {
        // e.preventDefault();
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

    return(
        <>
            <div className="table">
            <h1> Untappd Beers</h1>
                <table>
                    <thead>
                        <tr>
                            <span>
                            <th><Link to={"/beers/new"}>Add a new beer?</Link></th>
                            </span>
                        </tr>
                    </thead>
                    <tbody>
                        {beers.map((beer, index) => {
                            return(
                                <tr key={index}>
                                    <td><img src={beer.photoUrl} alt="" /></td>
                                    <td><Link to={"/beers/" + beer._id}>{beer.name}</Link></td>
                                    {/* <p><td>{beer.style}</td></p>
                                    <p><td>{beer.brewery}</td></p>
                                    <p><td>{beer.description}</td></p> */}
                                    <td>
                                        |   <span><Link to={"/beers/" + beer._id + "/edit"}>Edit Beer?</Link></span>   |
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default AllBeers;