'use client'

import React from "react"; 
import pro1 from '../../public/img/our_project.png';  
import arrow from '../../public/img/arrow.png';  
import pro2 from '../../public/img/our_product2.png'; 
import digital from '../../public/img/digital.png';
import Gleefull from '../../public/img/gleefull.png';
import Dogfordog from '../../public/img/dog-for-dog.png';

import './our-project.css'

export default function home() {
 
  return (
    <>  
      <div className="container-fluid p-5 pb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="heading font-light m-0">PORTFOLIO</h2>
          </div>
          
          <div className="row p-3"> 
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
         
          <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> Digital Marketing</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false">Website Development</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Graphic Design</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mobile Application</button>
  </li>
</ul>
<div className="tab-content pillPadding" id="pills-tabContent">
  <div className="tab-pane fades show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className="row">
      <div className="col-md-6 mb-5 mb-md-0"  >
      <img className="w-100" src={Gleefull.src} alt="Product" />
      
      <a className="name_project">GleeFull<img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={Dogfordog.src} alt="Product" /> 
      <a className="name_project">Dog4Dog<img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
    </div>
  </div>
  <div className="tab-pane fades" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row"> 
  
  <div className="col-md-6"  >
      <img className="w-100" src={Gleefull.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={Dogfordog.src} alt="Product" /> 
      <a className="name_project">Dog4Dog<img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      </div>
  </div>
  <div className="tab-pane fades" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="row"> 
  <div className="col-md-6"  >
      <img className="w-100" src={Gleefull.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={Dogfordog.src} alt="Product" /> 
      <a className="name_project">Dog4Dog<img className="arrow" src={arrow.src} alt="Product" /></a>
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
