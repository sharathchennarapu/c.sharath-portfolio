import React from 'react'
import '../components/Footer.css'
import {Link} from 'react-router-dom';
import { SiLinktree,SiInstagram,SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='footer-container-item'>
        <Link to='/'  className='footer-container-item-1 d-flex justify-content-center'>
            <img  src={require('../images/mylogo.2.png')} alt='mylogopic' className='img-fluid '/>
            </Link>
             <ul className="navitems2 me-auto mb-2 mb-lg-0" >
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
          <div className='footer-icons'>
            <div className='footer-icon1'> 
              <a href='https://linktr.ee/sharathchennarapu.uiux'><SiLinktree size={40} /></a> 
            </div>
            <div className='footer-icon1'> 
              <a href='https://www.linkedin.com/in/sharath-chennarapu-98929328a/?trk=public-profile-join-page'><SiLinkedin size={40} /> </a>
            </div>
            <div className='footer-icon1'> 
              <a href='https://www.instagram.com/_tinku_mudiraj_/'><SiInstagram  size={40}/></a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
