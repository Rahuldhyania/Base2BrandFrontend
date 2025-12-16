'use client'

import React from "react"; 
import auto from '../../../public/services-img/1.png';     
import shopify from '../../../public/services-img/2.png';     
import '../shopify/service.css'

export default function DevCompany() {
 
  

  return (
    <>  
        <div className="p-5 mt-5 company_section"> 
    <div className="container">
<div className="row text-white">
    <div className="col-md-6" data-aos="flip-left">
        <h1 className='agency_heading'>Why Choose Our Shopify Development Company?</h1>
     </div>
    <div className="col-md-6" data-aos="flip-right">
        <div className="overFlow">
        <div className="d-flex company_data">
      <img className='company' src={auto.src} alt="" />
        <div className="ml-3">
            <div className="section_data">
                <h3 className='primary'>Experienced Team of Shopify Developers</h3>
                <p>At Base2Brand, our team of experienced Shopify developers is dedicated to bringing expertise and innovation to every project. Our track record speaks volumes about our commitment to Shopify eCommerce development.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>Proven Track Record</h3>
                <p>Explore our portfolio of successful Shopify web development projects, showcasing quantifiable results in terms of increased sales and user engagement. Join the ranks of satisfied clients who have witnessed the impact of our Shopify web development services.</p>
            </div>

            <div className="section_data">
                <h3 className='primary'>Experienced Team of Shopify Developers</h3>
                <p>At Base2Brand, our team of experienced Shopify developers is dedicated to bringing expertise and innovation to every project. Our track record speaks volumes about our commitment to Shopify eCommerce development.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>Proven Track Record</h3>
                <p>Explore our portfolio of successful Shopify web development projects, showcasing quantifiable results in terms of increased sales and user engagement. Join the ranks of satisfied clients who have witnessed the impact of our Shopify web development services.</p>
            </div>

            <div className="section_data">
                <h3 className='primary'>Experienced Team of Shopify Developers</h3>
                <p>At Base2Brand, our team of experienced Shopify developers is dedicated to bringing expertise and innovation to every project. Our track record speaks volumes about our commitment to Shopify eCommerce development.</p>
            </div>
            <div className="section_data">
                <h3 className='primary'>Proven Track Record</h3>
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