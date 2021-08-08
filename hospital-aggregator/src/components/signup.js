import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import loginIcon from '../images/user.svg'
import Input from "@material-ui/core/Input";
//import Navigation from "./Navigation";
import { Link } from "react-router-dom";
//import './Login.css';
import { Component } from 'react';
import axios from "axios";


class signup extends Component {
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

        const endpoint = "http://localhost:7071/signup";

        const username = this.state.username;
        const password = this.state.password;

        const user_object = {
            username: username,
            password: password
        };

        axios.post(endpoint, user_object).then(res => {
            this.props.history.push("/hopilog");

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
            width:'720px'
            }}>
                <div Tabchange="Hospital Register" url="/hospitalregister" />
                <Container style={{marginBlock:'50px'}} >
                    <Row>

                        <div className="w-50 bg-white-70  br4 ">
                            <h1> Hospital Signup</h1>
                            <Col lg={4} md={4} sm={12} className="mt-3 p-3">
                                {/*<img className="icon-img mt1" src={loginIcon} alt="icon"/>*/}
                                <card>
                                    <Input
                                        placeholder="Username"
                                        className="ph3 br4 pv3"
                                        type={"text"}
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}


                                    />
                                    <br />
                                    <br />


                                    <Input
                                        placeholder="Password"
                                        className="ph3 br4 pv3"
                                        type={"password"}
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}


                                    />
                                    <br />



                                   

                                    <br />

                                    <Button
                                        variant="pa2 mv3 br-pill w-30 b"
                                        className="backy f5 grow mt-2"
                                        type="submit"
                                        onClick={this.handleFormSubmit}
                                    >Sign up</Button>




</card>
                            </Col>
                        </div>

                    </Row>
                </Container>

            </div>
           

        );
    }
}

export default signup;