import React from 'react';
import '../components/Navbar.css'
import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarmain() {
  
  return (
<>

<Navbar collapseOnSelect expand="lg" className="navbarcolor">
        <Navbar.Brand><Link to='/'> <img className='logo' src={require('../images/mylogo.2.png')} alt="mylogo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='m-3' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navitems">
            <Nav.Link><Link to='/'className='textdec'> Home</Link></Nav.Link>
            <Nav.Link><Link to='/services' className='textdec'> Services</Link></Nav.Link>
            <Nav.Link><Link to='/Skills' className='textdec'> Skills</Link></Nav.Link>
            <Nav.Link><Link to='/About' className='textdec'> About</Link></Nav.Link>
            <Nav.Link><Link to='/Portfolioworks' className='textdec'> Portfolio</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='/contact'>
                 <button type="button" class="btn btn-outline-primary m-3">Contact</button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

</>
  );
}

export default Navbarmain




