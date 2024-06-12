import React from 'react'
import Button from 'react-bootstrap/Button';
import '../components/Navbar.css'

function Home() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #3B55A5,}";
        document.body.appendChild(css);
    };
    
  return (
   <>
   <div className='container'>
    <div className='container-box'>
     <h1 className='home'>
        <p className='myname'>SHARATH CHENNARAPU</p>
        {/* eslint-disable-next-line */}
        <span className='iam'>I'm </span><a href="" className="typewrite designation" data-period="2000" data-type='[ " Developer & Designer" ]'>
        <span className="wrap"></span>
        </a>
     </h1>
     <div className='buttons'>
     <Button className='m-3' variant="outline-primary" size="lg">Hire Me</Button>
     <Button className='m-3' variant="outline-primary" size="lg">See My Works</Button>
     </div>
     </div>
    </div>
   </>
  )
}

export default Home
