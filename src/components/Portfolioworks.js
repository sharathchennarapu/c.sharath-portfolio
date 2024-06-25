import React from "react";
import "../components/Portfolioworks.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa6";

function Portfolioworks() {

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-container2">
          <h5>My Works</h5>
          <h1>Check My Portfolio</h1>
          <div>
            <Tabs defaultActiveKey="All" className="mb-3 selection">
              <Tab eventKey="All" title="All" className="selection-item">
                <Container>
                  <Row className="justify-content-md-center">
                
                    <Col className="box1 m-5" md="auto"> 
                      <a href="https://linktr.ee/SharathC.Development_portfolio">
                         <img className="htmlimg" src={require('../images/html.png')} alt="htmlimg" /> 
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a>
                    </Col>
                    <Col className="box1 m-5" md="auto">
                       <a href="https://linktr.ee/SharathC.Development_portfolio">
                          <img className="htmlimg" src={require('../images/css.png')} alt="htmlimg" />
                          <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                    </Col>
                    <Col className="box1 m-5" md="auto">
                      <a href="https://linktr.ee/SharathC.Development_portfolio">
                         <img className="htmlimg" src={require('../images/bootstrap.webp')} alt="htmlimg" />
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col className="box1 m-5" md="auto">
                        <a href="https://linktr.ee/SharathC.Development_portfolio">
                           <img className="htmlimg" src={require('../images/reactjs.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                        </a> 
                   </Col>
                    <Col className="box1 m-5" md="auto">
                        <a href="https://linktr.ee/SharathC.Designing_portfolio">
                           <img className="htmlimg" src={require('../images/ai.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                   </Col>
                    <Col className="box1 m-5" md="auto">
                        <a href="https://linktr.ee/SharathC.Designing_portfolio">
                           <img className="htmlimg" src={require('../images/ps.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col className="box1 m-5" md="auto">
                        <a href="https://linktr.ee/SharathC.Designing_portfolio">
                           <img className="htmlimg" src={require('../images/xd.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                   </Col>
                    <Col className="box1 m-5" md="auto">
                        <a href="https://linktr.ee/SharathC.Designing_portfolio">
                           <img className="htmlimg" src={require('../images/figma.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                        </a>
                   </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="Development"  title="Development" className="selection-item">
              <Container>
                  <Row className="justify-content-md-center">
                    <Col className="box2 m-5" md="auto">
                       <a href="https://linktr.ee/SharathC.Development_portfolio">
                          <img className="htmlimg" src={require('../images/html.png')} alt="htmlimg" />
                          <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a> 
                   </Col>
                    <Col className="box2 m-5" md="auto">
                       <a href="https://linktr.ee/SharathC.Development_portfolio">
                          <img className="htmlimg" src={require('../images/css.png')} alt="htmlimg" />
                          <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a>
                   </Col>
                   
                  </Row>
                  <Row className="justify-content-md-center">
                  <Col className="box2 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Development_portfolio">
                         <img className="htmlimg" src={require('../images/bootstrap.webp')} alt="htmlimg" />
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                    </a>
                 </Col>
                  <Col className="box2 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Development_portfolio">
                        <img className="htmlimg" src={require('../images/reactjs.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                     </a>
                  </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="Designing" title="Designing" className="selection-item" >
                 <Container>
                  <Row className="justify-content-md-center">
                  <Col className="box3 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Designing_portfolio">
                        <img className="htmlimg" src={require('../images/ai.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                     </a>
                  </Col>
                  <Col className="box3 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Designing_portfolio">
                         <img className="htmlimg" src={require('../images/ps.png')} alt="htmlimg" />
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                    </a>
                  </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                  <Col className="box3 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Designing_portfolio">
                        <img className="htmlimg" src={require('../images/xd.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div> 
                     </a>
                  </Col>
                  <Col className="box3 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Designing_portfolio">
                        <img className="htmlimg" src={require('../images/figma.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                    </a>
                  </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </div>
          <div className="portfolio-link m-3">
            <a href="https://linktr.ee/sharathchennarapu_Portfolio">
              <h3>
                <u>- Click to See Complete Portfolio -</u>
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolioworks;
