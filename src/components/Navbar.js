import React from 'react';
import '../components/Navbar.css'
import {Link} from 'react-router-dom';

function Navbarmain() {
  
  return (
<>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img className='logo' src={require('../images/mylogo.2.png')} alt="mylogo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navitems me-auto mb-2 mb-lg-0">
        <li className='navitems-li'> 
          <Link to='/'className='textdec'> Home</Link>
        </li >
        <li className='navitems-li'> 
          <Link to='/services' className='textdec'> Services</Link>
        </li> 
        <li className='navitems-li'> 
          <Link to='/Skills' className='textdec'> Skills</Link>
        </li> 
        <li className='navitems-li'> 
          <Link to='/About' className='textdec'> About</Link>
        </li> 
        <li className='navitems-li'> 
          <Link to='/Portfolioworks' className='textdec'> Portfolio</Link>
        </li> 
      </ul>
      <span className="d-flex p-3">
        <Link to='/contact'>
      <button type="button" class="btn btn-outline-primary">Contact</button>
      </Link>
      </span>
    </div>
  </div>
</nav>


</>
  );
}

export default Navbarmain




