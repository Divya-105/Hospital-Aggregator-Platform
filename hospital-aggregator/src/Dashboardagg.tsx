import React, { Component } from "react";
import './index.css';

import { ButtonToggle, CardBody, CardFooter, CardText, CardTitle, Container } from "reactstrap";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import {CreationModal} from "./CreationModal";
import { FaFirstAid } from "react-icons/fa";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import SearchHospital from './SearchHospital';



interface MyState{
    isOpen : boolean;
    hospitalcoll: [];

}

    
export class Dashboardagg extends Component<{}, MyState>{

    state : MyState = {
        isOpen :false,
        hospitalcoll: [],
    };

    componentDidMount () {

        axios.get('http://localhost:7071/show')
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
            <>
          
          <div>
          <CreationModal isOpen = {this.state.isOpen} toggle ={this.toggle}></CreationModal>

        <Container className="mt-4" style={{alignItems: "center"}}>
              <Row>
              <Col sm='3' className='text-center'>
                  <ButtonToggle color="success" onClick= {this.toggle}> 
                  <span className="font-size-l"> Register hospital</span>
                  </ButtonToggle>
                  </Col>

                  <Col>
         <span className='text-center my-5' >
            <SearchHospital/>
              </span>
              </Col>
                 
              </Row>
          </Container>

         

          <Container className="mt-4">
             {this.state.hospitalcoll.map(hospiobject => renderHospital(hospiobject))}
          </Container>

        </div>
        </>

        );
    }

}



function renderHospital(st) {
   
        return (

            <>
            <Row  style={{ margin: `2px`, display: `flex`,flexDirection: `row`, justifyContent: `center` }}>
                 <Card  className="e-card e-card-horizontal testimonial-col my-2" style={{ width: `2000 px` ,background:'Cornsilk'}}>
                        
                            <CardTitle tag="h4">
                                <FaFirstAid className="font-size-xxl" />  {st.name}
                            </CardTitle>

                            <CardBody  >
                            <Row>
                                <Col ><img src = {st.photos} alt="Sample" style={{ height: `200px` ,width:`500px`}}/>
                             
          </Col>
          <Col>
                                <Row  className="text-centre">
                                    <span className= "font-weight-bold">Specialization: </span>
                                    <span > {st.speciality} </span>
                                </Row>
                                <Row  className="text-centre">
                                    <span className= "font-weight-bold">No. of beds: </span>
                                    <span > {st.noofbeds} </span>
                                </Row>
                                <Row className="text-centre">
                                    <span className= "font-weight-bold">City: </span>
                                    <span > {st.city} </span>
                                </Row>  
                            <Row>
                                <div className="e-card-content aboutus"  >
                                <h4 className='text-center'>     About Us    </h4>
                                   <span> {st.aboutus}</span>
                             </div>
                             </Row>
                           
                                </Col>  
                            </Row>
                        </CardBody>

                        
                        </Card>
                        
            </Row>

</>
        );
}

