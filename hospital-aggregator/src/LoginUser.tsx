import axios from "axios";
import React, { Component } from "react";
import { Button,
    Col,
    Form,
    Modal,
ModalBody,
ModalHeader,
Row,
 } from "reactstrap";
 import Toast from 'react-bootstrap/Toast';
 import ToastHeader from 'react-bootstrap/ToastHeader';
 import ToastBody from 'react-bootstrap/ToastBody';
import { MouseEventHandler } from "react";

 
type MyProps1={
    isOpen : boolean
    toggle
}
export class LoginHospi extends Component <MyProps1> {



    handleSubmit =(event1)=>{
        alert("You are logged in!")
       // this.myFunction()
      event1.preventDefault()
        const data = new FormData(event1.target)

        const hospiobject ={
            username : data.get("username"),
          
            password : data.get("password"),
        }
        axios.post("http://localhost:7071/login",hospiobject)
        this.props.toggle();
    }
    render(){
    return(
    <Modal isOpen = {this.props.isOpen} toggle={this.props.toggle}>
    <ModalHeader toggle={this.props.toggle}>
        Hospital Login
    </ModalHeader>
    <ModalBody>
    <Form onSubmit = {this.handleSubmit} >
        <Row>
            <Col>
            <label>Username</label>
            </Col>
            <Col>
            <input id = "username" name= "username" type="text"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <label> Password</label>
            </Col>
            <Col>
            <input id = "password" name= "password" type="password"/>
            </Col>
        </Row>
        <Button >SignUp</Button>
              {/*onClick = {()=> this.myFunction()} */}
    </Form>


    </ModalBody>

</Modal>);
  
}
myFunction(): any {
    return(
        <div>
    <Toast>
    <ToastHeader>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Bootstrap</strong>
      <small>Congrats !!</small>
    </ToastHeader>
    <ToastBody>You are logged in!!</ToastBody>
  </Toast>
  </div>
  );
}

}

{/*
export class LoginAdmin extends Component <MyProps1> {

    handleSubmit =(event2)=>{
      alert("You are logged in!")
      event2.preventDefault()
        const data = new FormData(event2.target)

        const hospiobject ={
            name : data.get("name"),
           // speciality : data.get("speciality"),
            //noofbeds : data.get("noofbeds"),
            password : data.get("password"),
        }

        axios.post("http://localhost:7071/adminlogin",hospiobject)
        this.props.toggle();
    }
    render(){
    return(
    <Modal isOpen = {this.props.isOpen} toggle={this.props.toggle}>
    <ModalHeader toggle={this.props.toggle}>
        Admin Login
    </ModalHeader>
    <ModalBody>
    <Form onSubmit = {this.handleSubmit}>
        <Row>
            <Col>
            <label>Name</label>
            </Col>
            <Col>
            <input id = "name" name= "name" type="text"/>
            </Col>
        </Row>

        <Row>
            <Col>
            <label> Password</label>
            </Col>
            <Col>
            <input id = "password" name= "password" type="password"/>
            </Col>
        </Row>
        
        <Button onClick = {()=> this.myFunction()} >Login</Button>
              
    </Form>


    </ModalBody>

</Modal>);
  
}
    myFunction(): any {
        return(
            <div>
        <Toast>
        <ToastHeader>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>Congrats !!</small>
        </ToastHeader>
        <Toast.Body>You are logged in!!</Toast.Body>
      </Toast>
      </div>
      );
    }

   
}*/}

