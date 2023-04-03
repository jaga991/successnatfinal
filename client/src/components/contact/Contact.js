import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import './contact.css';

import { useState } from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';


export default function Contact(){

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            number: '',
            email: '',
            message: ''
        })
    

    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    return(
        <Container fluid>
            <h1 className="text-center">Let us know what you need!</h1>
            <Row md={3}  className="justify-content-center">
                <Card className="contact-card h-25">
                    <Card.Body className="text-center">
                        <FontAwesomeIcon className="w-25 h-25" icon={faPhone} />
                        <Card.Title>Contact Us</Card.Title>
                        <Card.Text>
                            <p>Office: <a href="tel:67920970">6782 0970</a></p>
                            <p>Mobile: <a href="tel:92396357">9239 6357</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="contact-card h-25">
                    <Card.Body className="text-center">
                        <FontAwesomeIcon className="w-25 h-25" icon={faEnvelope} />
                        <Card.Title>Email</Card.Title>
                        <Card.Text>
                            <p><a href="email:enquiries@successnat.com.sg">enquiries@successnat.com.sg</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                                <Card className="contact-card h-25">
                    <Card.Body className="text-center">
                        <FontAwesomeIcon className="w-25 h-25" icon={faClock} />
                        <Card.Title>Opening Hours</Card.Title>
                        <Card.Text>
                            <p> Monday - Friday: 9am - 10pm</p>
                            <p> Saturday - Sunday: 9am - 7pm</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Row>
            <Container>
                <Form onSubmit={handleSubmit} id="queryForm">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="input" placeholder="Enter Name" onChange={handleChange} value={formData.name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="number" type="input" placeholder="Enter Number" onChange={handleChange} value={formData.number}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} value={formData.email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control 
                            name="message"
                            as='textarea'
                            type="textarea"
                            rows={4} 
                            placeholder="What can we help you with?" 
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" form="queryForm"> 
                        Submit
                    </Button>
                </Form>
            </Container>
                

        </Container>
    )
}