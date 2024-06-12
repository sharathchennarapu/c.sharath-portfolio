import React from 'react'
import '../components/Expertise.css'
import expimg1 from '../images/exp-img1.jpg'

function Expertise() {
  return (
    <>
        <div className='expertise-container'>
          <div className='heading p-5'>
             <h3><u>My Expertise</u></h3>
             <h1>Provide Wide Range of Digital Services</h1>
          </div>
          <div className="expertise-container-item px-4 text-center">
            <div className="row gx-5">
              <div className="col exp-box">
                 <div className="p-3">
                   <div class="row justify-content-md-center">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg1} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>Web Development</h3>
                                              <p>I Develop Websites Using HTML, CSS, Bootstrap, Javascript,
                                                  Jquery, Json and React JS</p>
                                                <h4>Read More</h4></div>
                   </div>
                 </div>
              </div>
              <div className="col exp-box">
                 <div className="p-3">
                 <div class="row justify-content-md-center">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg1} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>Web Design</h3>
                                              <p>I Design web Templates, posters, logo ,vector arts and more Designing works using Illustrator and Photoshop</p>
                                                <h4>Read More</h4></div>
                   </div>
                 </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col exp-box">
                 <div className="p-3">
                 <div class="row justify-content-md-center">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg1} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>App Design</h3>
                                              <p>I Design app and websites Demo with animations, frameforks, and webtemplate Using Adobe XD.</p>
                                                <h4>Read More</h4></div>
                   </div>
                 </div>
              </div>
              <div className="col exp-box">
                 <div className="p-3">
                 <div class="row justify-content-md-center">
                     <div class="col col-md-auto p-3"><img className='img1' src={expimg1} alt='expertise img'/></div>
                     <div class="col exp-box-content"><h3>Graphic Design</h3>
                                              <p>I also do Graphic Design and Digital Arts.I made Some beautiful vector arts and digital paint in photoshop.</p>
                                                <h4>Read More</h4></div>
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
