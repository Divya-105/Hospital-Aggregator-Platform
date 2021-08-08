import React, { Component } from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Navbar from "reactstrap/es/Navbar";
import{
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline,
  
}  from 'react-icons/io5';

import { CardBody, CardFooter, CardText, CardTitle, Container } from "reactstrap";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import {CreationModal} from "./CreationModal";
import { FaFirstAid } from "react-icons/fa";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';



interface MyState{
    isOpen : boolean;
    hospitalcoll: [];

}

    
export class Navigationlogin extends Component<{}, MyState>{

    state : MyState = {
        isOpen :false,
        hospitalcoll: [],
    };

    componentDidMount () {

        axios.get('http://localhost:7071/list')
        .then(res=> {
            const hospitalcoll = res.data 
            this.setState({hospitalcoll})

        }) 
    }

toggle = () =>{
    this.setState((prevState)=> ({isOpen : !prevState.isOpen}))
}

    render(){

        return (

            <div>
                
     {/*<LoginAdmin isOpen = {this.state.isOpen} toggle ={this.toggle}></LoginAdmin>*/}

<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" className="btn btn-secondary" color="success"  >Home</button>
  <button type="button" className="btn btn-secondary">Option2</button>

  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>
      Login
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <button className="dropdown-item">Hospital signup</button>
      <button className="dropdown-item" onClick={this.toggle} >Admin Login</button>
    </div>
  </div>
</div>
</div>
);
}

}





