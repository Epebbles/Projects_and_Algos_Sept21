import './App.css';
import React from 'react';
// import { Container, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {Router} from "@reach/router";
import Login from "./components/Login";
import Register from "./components/Register";
import AddBeer from './views/AddBeer';
import AllBeers from './components/AllBeers';
import Details from './components/Details';
import Edit from './components/Edit';
import LoginReg from './views/LoginReg';
import Header from './components/Header';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <LoginReg path="/loginreg" />
        <Register path="/register" />
        <Login path="/login" />
        <Header path="/header" />
        <HomePage default path="/beers" />
        <AllBeers path="/beers" />
        <AddBeer path="/beers/new" />
        <Details path="/beers/:beerId" />
        <Edit path="/beers/:beerId/edit" />
      </Router>
    </div>

  );
}

export default App;
