import React, { Component } from "react";
//import './index.css';

import { CardBody, CardFooter, CardText, CardTitle, Container,Button } from "reactstrap";
import {  Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { FaFirstAid } from "react-icons/fa";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import SearchHospital from '../SearchHospital';



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

         

          <Col className='my-3'>
         <span className='text-center ' >
            <SearchHospital/>
              </span>
              </Col>

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
    axios.get(`http://localhost:7071/approve/${id}`);
    
}

