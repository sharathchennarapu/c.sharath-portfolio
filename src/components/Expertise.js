import React from 'react'
import '../components/Expertise.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import expimg1 from '../images/exp-img1.jpg'
import expimg2 from '../images/exp-img2.jpg'
import expimg3 from '../images/exp-img3.jpg'
import expimg4 from '../images/exp-img4.jpg'

function Expertise() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  return (
    <>
        <div className='expertise-container'>
          <div className='heading p-5'>
             <h3><u>My Expertise</u></h3>
             <h1>Provide Wide Range of Digital Services</h1>
          </div>
          <div className="expertise-container-item px-4 text-center">
            <div className="row gx-5">
              <div className="col exp-box exp-content-box1">
                 <div className="p-3">
                   <div class="row justify-content-md-center ">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg1} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>Web Development</h3>
                                              <p>I Develop Websites Using HTML, CSS, Bootstrap, Javascript,
                                                  Jquery, Json and React JS</p>
                                                <h4>
                                                <Button variant="outline-primary" onClick={handleShow}>Read More</Button>
                                                   <Modal show={show} onHide={handleClose} animation={false}>
                                                     <Modal.Header closeButton>
                                                       <Modal.Title>Web Development</Modal.Title>
                                                     </Modal.Header>
                                                     <Modal.Body>Web Development is Front End Part I learnt in my Training. As a Front End Developer I have Good Knowledge on HTML, CSS, JavaScript, Bootstrap and ReactJS are the Libraries that i know.I also Done few Projects with Pure HTML, With Only HTML & CSS , then again with Bootstrap and I also Done a Full fledged Project using Reactjs</Modal.Body>
                                                     <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                                 Close
                                                        </Button>
                                                     </Modal.Footer>
                                                    </Modal>
                                                </h4>
                      </div>
                   </div>
                 </div>
              </div>
              <div className="col exp-box exp-content-box2">
                 <div className="p-3">
                 <div class="row justify-content-md-center ">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg2} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>Web Design</h3>
                                              <p>I Design web Templates, posters, logo ,vector arts and more Designing works using Illustrator and Photoshop</p>
                                              <h4>
                                                <Button variant="outline-primary" onClick={handleShow2}>Read More</Button>
                                                   <Modal show={show2} onHide={handleClose2} animation={false}>
                                                     <Modal.Header closeButton>
                                                       <Modal.Title>Web Design</Modal.Title>
                                                     </Modal.Header>
                                                     <Modal.Body>Web Designing is a Product designing part where i have Good Knowledge in Adobe Photoshop, Adobe Illustrator and Adobe Xd. I also Know some Basics of Figma. With the Help of this tools i have created multiple Designing works which are Webtemplates, Logos, Social Media Post, Digital Paint & Art, vector arts</Modal.Body>
                                                     <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose2}>
                                                                 Close
                                                        </Button>
                                                     </Modal.Footer>
                                                    </Modal>
                                                </h4>
                        </div>
                   </div>
                 </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col exp-box exp-content-box1">
                 <div className="p-3">
                 <div class="row justify-content-md-center ">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg3} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>App Design</h3>
                                              <p>I Design app and websites Demo with animations, frameforks, and webtemplate Using Adobe XD.</p>
                                              <h4>
                                                <Button variant="outline-primary" onClick={handleShow3}>Read More</Button>
                                                   <Modal show={show3} onHide={handleClose3} animation={false}>
                                                     <Modal.Header closeButton>
                                                       <Modal.Title>App Designing</Modal.Title>
                                                     </Modal.Header>
                                                     <Modal.Body>With the help of tools Adobe XD and Figma I create apps and webtemplates interface with the help of this tools. I create Frameworks and Do Reasearch.</Modal.Body>
                                                     <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose3}>
                                                                 Close
                                                        </Button>
                                                     </Modal.Footer>
                                                    </Modal>
                                                </h4>
                      </div>
                   </div>
                 </div>
              </div>
              <div className="col exp-box exp-content-box2">
                 <div className="p-3">
                 <div class="row justify-content-md-center ">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg4} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>Graphic Design</h3>
                                              <p>I also do Graphic Design and Digital Arts.I made Some beautiful vector arts and digital paint in photoshop.</p>
                                              <h4>
                                                <Button variant="outline-primary" onClick={handleShow4}>Read More</Button>
                                                   <Modal show={show4} onHide={handleClose4} animation={false}>
                                                     <Modal.Header closeButton>
                                                       <Modal.Title>Graphic Design</Modal.Title>
                                                     </Modal.Header>
                                                     <Modal.Body>I have Good Knowledge in Graphic Design as well.With the help of Adobe Illustrator and Adobe Photoshop.I can create Graphic Design like posters, mockups,digital Arts, Logos and ads.</Modal.Body>
                                                     <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose4}>
                                                                 Close
                                                        </Button>
                                                     </Modal.Footer>
                                                    </Modal>
                                                </h4>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
           </div>
        </div>
    
    </>
  )
}

export default Expertise
