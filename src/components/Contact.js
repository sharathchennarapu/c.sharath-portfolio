import React from 'react'
import '../components/Contact.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { CiLocationOn,CiMail,CiPhone } from "react-icons/ci";


function Contact() {
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return (
   <>
   <div className='contact-maincontainer'>
   <div className='contact-container'>
    <h4>Get in Touch</h4>
    <h1>Any Questions? Feel Free To Contact</h1>
   </div>
   <div className='contact-container-item'>

   <Container>
      <Row>
        <Col>
        <div className='contact-details'>
            <div className='contact-details-items'>
             <h5> <CiLocationOn size={50}/><span className='contactcolor'><b>Address</b>: Hyderabad, Telangana</span></h5>
             <h5> <CiMail size={50}/><span className='contactcolor'><b>Email</b>: sharathchennarapu.uiuxgmail.com</span></h5>
              <h5><CiPhone size={50}/><span className='contactcolor'><b>Phone</b>: +91 8309347200</span></h5>
            </div>
        </div>
        </Col>
        <Col>
        <div className='contact-details2'>
        <div className='contact-details-items2'>
   <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name: </Form.Label>
          <Form.Control required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type='invalid'>Please provide your name.</Form.Control.Feedback>
        </Form.Group>  

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Username: </Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>




      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control type="number" placeholder="Phone Number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Phone Number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Subject: </Form.Label>
          <Form.Control type="text" placeholder="Subject" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Subject.
          </Form.Control.Feedback>
        </Form.Group>
      
      </Row>



      <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Message: </Form.Label>
          <Form.Control type="text" placeholder="Message" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Message.
          </Form.Control.Feedback>
        </Form.Group >
      <Button className='mt-4' type="submit">Submit form</Button>
    </Form>
    </div>
    </div>
    </Col>
   
      </Row>
    </Container>
    </div>
   </div>
   </>
  )
}

export default Contact
