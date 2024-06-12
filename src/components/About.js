import React from 'react'
import '../components/About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
    <div className='about-container'>
        <div className='about-container-items'>
           <Container>
               <Row className="justify-content-md-center">
                  <Col className='about-container-items1'><img src={require('../images/mypic.png')} alt='myimg' className='myimg'/> </Col>
                  <Col  className='about-container-items2'>
                  <h3>About Me</h3>
                  <h5>Hello, I'm <b>Sharath Chennarapu</b>, a Certified UI UX Developer. I possess a strong passion for learning and implementing new technologies. My role as a UI UX Developer involves engaging in UIUX Research & Designing (using Figma) and Development (using React JS), providing comprehensive support across both domains. I pride myself on being a quick learner and a dedicated team player, proficient in Designing, Development, and Deployments.</h5>
                  <div className='stacknames'>
                     <div  className="p-2"><span className="p-2 stacknames-color">Name :  </span>Sharath Chennarapu</div>
                  </div>
                  <div className='stacknames'>
                     <div className="p-2"> <span className="p-2 stacknames-color">Education :</span>MBA(Finance)</div>
                     </div>
                  <div className='stacknames'> 
                     <div className="p-2"> <span className="p-2 stacknames-color">Certificate :</span>UI/UX Developer</div>
                     </div>
                  </Col>
              </Row>
           </Container>

        </div>
    </div>
    </>
  )
}

export default About
