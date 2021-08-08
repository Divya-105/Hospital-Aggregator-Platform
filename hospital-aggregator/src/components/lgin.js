import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import loginIcon from '../images/user.svg'
import Input from "@material-ui/core/Input";
//import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import './Login.css';
import { Component } from 'react';
import axios from "axios";


class lgin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit = event => {
        
        event.preventDefault();

        const endpoint = "http://localhost:7071/logina";

        const username = this.state.username;
        const password = this.state.password;

        const user_object = {
            username: username,
            password: password
        };

        axios.post(endpoint, user_object).then(res => {
            this.props.history.push("/AdminDashboard");

        }).catch(() => {
            alert("Invalid Credentials")
        });

    };



    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        );
    };

    render() {
        return (
            <div className='container border'
              style={{marginTop:"40px",
              width:'50%',
              background:'#C1C8E4'
              }}>
          <h1>Admin Login</h1>
          <form className='row' 
              style={{margin:"25px 85px 75px 100px"}}
             >
                  
              <label> Username </label> 

              <input type='username' name='username' className="form-control "   value={this.state.username}
                                        onChange={this.handleChange} />

              <label> Password </label>
              <input type='password' name='password' className="form-control"  value={this.state.password}
                                        onChange={this.handleChange} />

              

            
              
              <Button
                                        variant="pa2 mv3 br-pill w-30 b"
                                        className="backy f5 grow mt-2"
                                        type="submit"
                                        onClick={this.handleFormSubmit}
                                    >Sign in</Button>


              
              
              
       
          </form>
       
        </div>

        );
    }
}

export default lgin;