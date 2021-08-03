import React, { Component } from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Navbar from "reactstrap/es/Navbar";


import axios from "axios";
import { FaFirstAid } from "react-icons/fa";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
//import Popper from 'popper.js';
import { LoginHospi } from "./LoginUser";


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
               {/* <Navbar color= "dark" light mb-2>
                    <NavbarBrand className= "text-white">
                    <FaFirstAid className = "font-size-xxl"/>
                        <span className="font-size-l ml-3">Hospital Aggregator Platform</span>
                    </NavbarBrand>
        </Navbar>*/}
                 <LoginHospi isOpen = {this.state.isOpen} toggle ={this.toggle}></LoginHospi>

<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  

  <div className="btn-group" role="group">
   {/* <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
      Login
    </button>*/}
    <div className="button" aria-labelledby="btnGroupDrop1">
      <button className="button" onClick={this.toggle}>Hospital login</button>
      <button className="button" onClick={this.toggle}>Admin Login</button>
    </div>
  </div>
</div>
</div>
);
}

}





