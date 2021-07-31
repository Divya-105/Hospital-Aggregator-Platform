import React, { Component } from "react";

import UserService from "../services/user.service";
import Container from "./Container";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <>
      
      {/*<Container content={this.state.content}/>*/}
      <div className='header'>
      <a href="index2.html"><img src=""/></a>
      </div>
      <div className="text-box">
    <h1> Hospital Aggregator</h1>
    <p>"Welcome To Our Hospital Aggregator"</p>
    
  </div>
      
      </>
      
    );
  }
}
