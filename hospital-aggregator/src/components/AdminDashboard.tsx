import React, { Component } from "react";
//import './index.css';

import { CardBody, CardFooter, CardText, CardTitle, Container,Button } from "reactstrap";
import {  Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { FaFirstAid } from "react-icons/fa";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';



//export const foo = 'foo';
interface MyState{
    isOpen : boolean;
    hospitalcoll: [];

}

    
export class AdminDashboard extends Component<{}, MyState>{

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

   <>
          <div>

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

            

            
            <Row  style={{ display: `flex`,flexDirection: `row`, justifyContent: `center` }}>
                 <Card  className="e-card e-card-horizontal testimonial-col my-2" style={{ width: `2000px`,background:'Cornsilk' }}>
                       
                            <CardTitle tag="h4">
                                <FaFirstAid className="font-size-xxl" />  { st.name }
                            </CardTitle>

                        <CardBody >
                            <Row>
                                <Col > <img src="https://th.bing.com/th/id/OIP.lVo0fTEpM9V-b1PGXrwcngHaE9?pid=ImgDet&rs=1" 
          alt="Sample" style={{ height: `200px` }} /></Col>
          <Col>
                                <Row  className="text-centre">
                                    <span className= "font-weight-bold">Specialization :</span>
                                    <span > {st.speciality} </span>
                                </Row>
                                <Row  className="text-centre">
                                    <span className= "font-weight-bold">No. of beds :</span>
                                    <span > {st.noofbeds} </span>
                                </Row>
                                <Row className="text-centre">
                                    <span className= "font-weight-bold">City :</span>
                                    <span > {st.city} </span>
                                </Row>  
                            <Row>
                               
                                <div className="e-card-content aboutus"  >
                                    <h4 className='text-center'>     About Us    </h4>
                                    A hospital is a health care institution providing patient treatment with specialized medical 
                                    and nursing staff and medical equipment.[1] The best-known type of hospital is the general hospital,
                                     which typically has an emergency department to treat urgent health problems ranging from fire and 
                                     accident victims to a sudden illness. 
        </div>
        
        </Row>
                                </Col>  
                            </Row>
                        </CardBody>

                       
                            
                                <Container  className='text-center'>
                                <Button color="success" onClick={()=> ApproveHospital(st.id)}>
                                        Approve
                                </Button>{' '}
                                
                             
                                    <Button  color="danger"  onClick={()=> deleteHospital(st.id)}>
                                        Delete
                                    </Button>
                                    </Container>
                               
                            
                        
                        </Card>
                        
            </Row>


        );
}

function deleteHospital(id: any): void {
    axios.post(`http://localhost:7071/delete/${id}`);
}
function ApproveHospital(id: any): void {
    axios.post(`http://localhost:7071/approve/${id}`);
    
}

