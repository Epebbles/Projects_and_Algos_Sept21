import React from "react";
import Header from "../components/Header";
import AllBeers from "../components/AllBeers";

const HomePage = () => {
    return(
        <div className="container-flex">
            <Header />
            <hr/>
            <AllBeers />
        </div>
    );
};
export default HomePage;