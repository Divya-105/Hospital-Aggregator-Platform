import axios from "axios";
import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
    Button,
    Col,
    Container,
    Form,
    Modal,
    ModalBody,
    ModalHeader,
    Label,
    Input,

    Row,
} from "reactstrap";

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

type MyProps = {
    isOpen: boolean
    toggle
}

export class CreationModal extends Component<MyProps> {


    handleSubmit = (event) => {

        alert('Your details have been submitted and waiting approval from admin.')

        toast("n");
        event.preventDefault()
        const data = new FormData(event.target)

        const hospiobject = {
            name: data.get("name"),
            speciality: data.get("speciality"),
            noofbeds: data.get("noofbeds"),
            city: data.get("city"),

            aboutus: data.get("aboutus"),
            photos: data.get("photos"),
        }

        axios.post("http://localhost:7071/register", hospiobject)
        this.props.toggle();


    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    Welcome !! Fill your hospital details !
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <label> Name</label>
                            </Col>
                            <Col>
                                <input id="name" name="name" type="text" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label> Specialization</label>
                            </Col>
                            <Col>
                                <input id="speciality" name="speciality" type="text" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label> No of beds</label>
                            </Col>
                            <Col>
                                <input id="noofbeds" name="noofbeds" type="number" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label> City</label>
                            </Col>
                            <Col>
                                <input id="city" name="city" type="text" />
                            </Col>
                        </Row>

                      {/*  <Row>
                            <Col>
                                <label> About us</label>
                            </Col>
                            <Col>
                                <input id="aboutus" name="aboutus" type="textarea" />
                            </Col>
                      </Row>*/}
                        <Row>
                        <Col>
                        <Label for="exampleText">About us</Label>
                        </Col>
                        <Col>
                       <Input type="textarea" name="aboutus" id="aboutus" />
                       </Col>
                         </Row>

                        <Row>
                            <Col>
                                <label> Image URL</label>
                            </Col>
                            <Col>
                                <input id="photos" name="photos" type="text" />
                            </Col>
                        </Row>

                        <Container className='text-center'>

                            <Button color="success" >
                                Submit details





                            </Button>
                            <ToastContainer />
                        </Container>
                    </Form>


                </ModalBody>
            </Modal>);


    }
}