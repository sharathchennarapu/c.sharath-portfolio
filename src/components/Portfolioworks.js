import React from "react";
import "../components/Portfolioworks.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Portfolioworks() {
  return (
    <>
      <div className="portfolio-container2">
        <h5><u>My Works</u></h5>
        <h1>Check My Portfolio</h1>
        <div className="container works-container">
          <Tabs variant="soft-rounded" align="center" colorScheme="green">
            <TabList>
              <Tab>All</Tab>
              <Tab>Development</Tab>
              <Tab>Designing</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Container>
                  <Row className="justify-content-md-center">
                
                    <Col className="box1 m-5" md="auto"> 
                      <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                         <img className="htmlimg" src={require('../images/html.png')} alt="htmlimg" /> 
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a>
                    </Col>
                    <Col className="box1 m-5" md="auto">
                       <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                          <img className="htmlimg" src={require('../images/css.png')} alt="htmlimg" />
                          <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                    </Col>
                    <Col className="box1 m-5" md="auto">
                      <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                         <img className="htmlimg" src={require('../images/bootstrap.webp')} alt="htmlimg" />
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col className="box1 m-5" md="auto">
                        <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                           <img className="htmlimg" src={require('../images/reactjs.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                        </a> 
                   </Col>
                    <Col className="box1 m-5" md="auto">
                        <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                           <img className="htmlimg" src={require('../images/ai.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                   </Col>
                    <Col className="box1 m-5" md="auto">
                        <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                           <img className="htmlimg" src={require('../images/ps.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col className="box1 m-5" md="auto">
                        <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                           <img className="htmlimg" src={require('../images/xd.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                       </a>
                   </Col>
                    <Col className="box1 m-5" md="auto">
                        <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                           <img className="htmlimg" src={require('../images/figma.png')} alt="htmlimg" />
                           <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                        </a>
                   </Col>
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
              <Container>
                  <Row className="justify-content-md-center">
                    <Col className="box2 m-5" md="auto">
                       <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                          <img className="htmlimg" src={require('../images/html.png')} alt="htmlimg" />
                          <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a> 
                   </Col>
                    <Col className="box2 m-5" md="auto">
                       <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                          <img className="htmlimg" src={require('../images/css.png')} alt="htmlimg" />
                          <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                      </a>
                   </Col>
                   
                  </Row>
                  <Row className="justify-content-md-center">
                  <Col className="box2 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                         <img className="htmlimg" src={require('../images/bootstrap.webp')} alt="htmlimg" />
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                    </a>
                 </Col>
                  <Col className="box2 m-5" md="auto">
                     <a href="https://linktr.ee/SharathC.Development_portfolio" target="blank">
                        <img className="htmlimg" src={require('../images/reactjs.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                     </a>
                  </Col>
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container>
                  <Row className="justify-content-md-center">
                  <Col className="box3 m-5" md="auto">
                     <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                        <img className="htmlimg" src={require('../images/ai.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                     </a>
                  </Col>
                  <Col className="box3 m-5" md="auto">
                     <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                         <img className="htmlimg" src={require('../images/ps.png')} alt="htmlimg" />
                         <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                    </a>
                  </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                  <Col className="box3 m-5" md="auto">
                     <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                        <img className="htmlimg" src={require('../images/xd.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div> 
                     </a>
                  </Col>
                  <Col className="box3 m-5" md="auto">
                     <a href="https://designing-portfolio-sharathchennarapu.netlify.app/" target="blank">
                        <img className="htmlimg" src={require('../images/figma.png')} alt="htmlimg" />
                        <div className="overlay">
                          <h3>click here to view <FaArrowRight /> </h3>
                         </div>
                    </a>
                  </Col>
                  </Row>
                </Container>
              </TabPanel>
            </TabPanels>
          </Tabs>
        <div className="portfolio-link">
          <a href="https://linktr.ee/sharathchennarapu_Portfolio" target="blank">
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
