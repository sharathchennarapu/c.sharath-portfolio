import React from "react";
import "../components/Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";


function Contact() {
  const [state, handleSubmit] = useForm("mvgpppen");
  if (state.succeeded) {
    return alert('Entered details successfully recevied. Thank You!');
  }

  return (
    <>
      <div className="contact-maincontainer">
        <div className="contact-container">
          <h4>Get in Touch</h4>
          <h1>Any Questions? Feel Free To Contact</h1>
        </div>
        <div className="contact-container-item">
          <Container>
            <Row>
              <Col>
                <div className="contact-details">
                  <div className="contact-details-items">
                    <h5>
                      {" "}
                      <CiLocationOn size={50} />
                      <span className="contactcolor">
                        <b>Address</b>: Hyderabad, Telangana
                      </span>
                    </h5>
                    <h5>
                      {" "}
                      <CiMail size={50} />
                      <span className="contactcolor">
                        <b>Email</b>: sharathchennarapu.uiuxgmail.com
                      </span>
                    </h5>
                    <h5>
                      <CiPhone size={50} />
                      <span className="contactcolor">
                        <b>Phone</b>: +918309347200
                      </span>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="contact-details2">
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 ">
                      <label className="formcolor" htmlFor="name" >
                        Name:{" "}
                      </label>
                      <input
                        className="formfillup"
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Enter your Name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="formcolor" htmlFor="number">
                        Phone Number:{" "}
                      </label>
                      <input
                        className="formfillup"
                        id="number"
                        type="number"
                        name="number"
                         placeholder="Enter your valid Phone Number"
                      />
                      <ValidationError
                        prefix="Number"
                        field="number"
                        errors={state.errors}
                      />
                    </div>
                    <div className="col-12">
                      <label className="formcolor" htmlFor="email">
                        Email Address:{" "}
                      </label>
                      <input
                        className="formfillup2"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your valid Email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="col-12">
                      <label className="formcolor" htmlFor="message">
                        Message:{" "}
                      </label>
                      <textarea
                        className="formfillup3"
                        id="message"
                        name="message"
                        placeholder="Enter Message"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    <div className="col-12">
                      <Button
                        variant="outline-primary"
                        type="submit"
                        disabled={state.submitting}
                      >
                        {" "}
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Contact;
