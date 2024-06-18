import React from 'react';
import '../components/Navbar.css'
import {Link} from 'react-router-dom';

function Navbarmain() {
  
  return (
<>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link to='/'> <img className='logo' src={require('../images/mylogo.2.png')} alt="mylogo"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navitems ">
        <li class='nav-item navitems-li'> 
          <Link to='/'className='textdec nav-link'> Home</Link>
        </li >
        <li className='nav-item navitems-li'> 
          <Link to='/services' className='textdec nav-link'> Services</Link>
        </li> 
        <li className='nav-item navitems-li'> 
          <Link to='/Skills' className='textdec nav-link'> Skills</Link>
        </li> 
        <li className='nav-item navitems-li'> 
          <Link to='/About' className='textdec nav-link'> About</Link>
        </li> 
        <li className='nav-item navitems-li'> 
          <Link to='/Portfolioworks' className='textdec nav-link'> Portfolio</Link>
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




