import React from 'react'
import '../components/Portfolioworks.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Portfolioworks() {
  return (
   <>
   <div className='portfolio-container'>
    <div className='portfolio-container2'>
        <h5>My Works</h5>
        <h1>Check My Portfolio</h1>
     <div>
     <Tabs defaultActiveKey="All" id="justify-tab-example"  className="mb-3 selection" justify >
        <Tab eventKey="All" title="All">
            <div className='box1'></div>
            <div className='box1'></div>
            <div className='box1'></div>
            <div className='box1'></div>
           
        </Tab>
        <Tab eventKey="Development" title="Development">
            <div className='box2'></div>
            <div className='box2'></div>
            <div className='box2'></div>
            <div className='box2'></div>
           
        </Tab>
        <Tab eventKey="Designing" title="Designing">
            <div className='box3'></div>
            <div className='box3'></div>
            <div className='box3'></div>
            <div className='box3'></div>
            
        </Tab>
     </Tabs>
     </div>
     <div className='portfolio-link'>
        <h3><u>Click to See Complete Portfolio</u></h3>
        </div> 
    </div>
   </div>
   </>
  )
}

export default Portfolioworks
