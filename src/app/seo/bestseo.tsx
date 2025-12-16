'use client'

import React, { useState } from "react";  
import Request from "../request-form"; 
import BestSeo from "../../../public/seo/best.png" 

export default function Bestseo() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>  
      <div className="container-fluid p-5 mt-5">  
        <div className="row mt-5 pt-5">
            <div className="col-md-6 text-white mt-5" data-aos="fade-left">
                <h1 className="mb-5">Best SEO Executives in Mohali</h1>
                <p className="mt-4">We get that website search engine optimization (SEO) can be baffling, so at Base 2 Brand, <br /> we endeavor to make our SEO services simple.</p>
                <p className="mt-4">Our group of Mohali SEO specialists stir day by day to stay aware of the most recent <br /> patterns and procedures, just as we keep steady for over 600+ yearly updates <br /> Google makes to their inquiry calculation.</p>
                <p className="mt-4">We utilize this information to offer unsurprising and feasible development by following <br /> a very defined and straightforward interaction.</p>
                <div className="mt-5">
                <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

                </div>
            </div>
            <div className="col-md-6 text-center"  data-aos="fade-right">
                <img className="w-75 m-auto" src={BestSeo.src} alt="" />
            </div>
        </div>
      </div> 
      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
