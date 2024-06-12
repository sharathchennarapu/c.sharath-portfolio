import React from 'react'
import '../components/Footer.css'
import Nav from 'react-bootstrap/Nav';
import { SiLinktree,SiInstagram,SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='footer-container-item'>
            <img src={require('../images/mylogo.2.png')} alt='mylogopic' />
            <Nav  className="me-auto my-2 my-lg-0 navitems2"  style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link style={{ color: '#3B55A5' }} href="#action1">Home   |</Nav.Link>
            <Nav.Link style={{ color: '#3B55A5' }} href="#action2">Services   |</Nav.Link>
            <Nav.Link style={{ color: '#3B55A5' }} href="#action2">Skills   |</Nav.Link>
            <Nav.Link style={{ color: '#3B55A5' }} href="#action2">About    |</Nav.Link>
            <Nav.Link style={{ color: '#3B55A5' }} href="#action2">Portfolio </Nav.Link>
          </Nav>
          <div className='footer-icons'>
            <div className='footer-icon1'> <SiLinktree size={50} /> </div>
            <div className='footer-icon1'> <SiInstagram  size={50}/></div>
            <div className='footer-icon1'> <SiLinkedin  size={50}/></div>
        
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
