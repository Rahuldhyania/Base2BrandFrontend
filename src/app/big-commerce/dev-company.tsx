'use client'
import { useEffect } from 'react';

import React from "react"; 
import auto from '../../../public/services-img/1.png';     
import shopify from '../../../public/services-img/2.png';     
import '../shopify/service.css'

export default function DevCompany() {
 
  

  return (
    <>  
        <div className="p-4 p-md-5 mt-md-5 mt-0"> 
    <div className="container">
<div className="row text-white">
    <div className="col-md-6  mb-5 mb-md-0" data-aos="flip-right">
        <h1 className='agency_heading'>Why Choose Our BigCommerce Theme  & App Development Company?</h1>
     </div>
    <div className="col-md-6" data-aos="flip-left">
        <div className="overFlow">
        <div className="d-flex company_data">
      <img className='company' src={auto.src} alt="" />
        <div className="ml-3">
            <div className="section_data">
                <h3 className='primary'>B2B</h3>
                <p>At Base2Brand, our team of experienced Shopify developers is dedicated to bringing expertise and innovation to every project. Our track record speaks volumes about our commitment to Shopify eCommerce development.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>Headless Commerce</h3>
                <p>Explore our portfolio of successful Shopify web development projects, showcasing quantifiable results in terms of increased sales and user engagement. Join the ranks of satisfied clients who have witnessed the impact of our Shopify web development services.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>B2B</h3>
                <p>At Base2Brand, our team of experienced Shopify developers is dedicated to bringing expertise and innovation to every project. Our track record speaks volumes about our commitment to Shopify eCommerce development.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>Headless Commerce</h3>
                <p>Explore our portfolio of successful Shopify web development projects, showcasing quantifiable results in terms of increased sales and user engagement. Join the ranks of satisfied clients who have witnessed the impact of our Shopify web development services.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>B2B</h3>
                <p>At Base2Brand, our team of experienced Shopify developers is dedicated to bringing expertise and innovation to every project. Our track record speaks volumes about our commitment to Shopify eCommerce development.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>Headless Commerce</h3>
                <p>Explore our portfolio of successful Shopify web development projects, showcasing quantifiable results in terms of increased sales and user engagement. Join the ranks of satisfied clients who have witnessed the impact of our Shopify web development services.</p>
            </div>
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