import React from 'react'
import '../components/Skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Skills() {
  return (
    <>
    <div className='skills-container '>
     <Container >
      <Row className='skills-container-items'>
        <Col className='skills-container-items1'>
           <h4><u>My Skills</u></h4>
           <h1>Beautiful and Unique Digital Experiences</h1>
           <h5>I Design the Beautiful yet simple websites and Digital art. And also Develop the websites in Quick Time with the beautiful user Experience.The Tools I Use Adobe Illustrator, Adobe Photoshop and Adobe XD for Designing. HTML, CSS and JavaScript with the Libraries Bootstrap, Jquery and ReactJS</h5>
           <Button variant="outline-primary" size="lg">Download CV</Button>
        </Col>
        <Col className='skills-container-items1'>
              <div className="container text-center">
                  <div className="row">
                      <div className="col sci">
                           {/* <CircularProgress value={70} color='red.400' thickness='12px' size='170px'>
                                <CircularProgressLabel className='sci-number'>70%</CircularProgressLabel>
                            </CircularProgress> */}
                           <p>Web Development</p>
                      </div>
                      <div className="col sci">
                           {/* <CircularProgress value={40} color='green.400' size='170px'>
                               <CircularProgressLabel className='sci-number'>40%</CircularProgressLabel>
                            </CircularProgress> */}
                            <p>Web Design</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col sci">
                          {/* <CircularProgress value={40} color='green.400' size='170px'>
                              <CircularProgressLabel className='sci-number'>40%</CircularProgressLabel>
                           </CircularProgress> */}
                           <p>App Design</p>
                      </div> 
                      <div className="col sci"> 
                           {/* <CircularProgress value={40} color='green.400' size='170px'>
                                <CircularProgressLabel className='sci-number'> 40%</CircularProgressLabel>
                           </CircularProgress> */}
                           <p>Graphic Design</p>
                       </div>
                  </div>
              </div>
           </Col>
      </Row>
    </Container>
    </div>

    </>
  )
}

export default Skills
