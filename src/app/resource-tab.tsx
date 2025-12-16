'use client'

import React from "react"; 
import Tab1 from "../../public/tab-img/tab1.png"
import Tab2 from "../../public/tab-img/tab2.png"
import Tab3 from "../../public/tab-img/tab3.png"
import Tab4 from "../../public/tab-img/tab4.png"
export default function home() {
   
  return (
    <>  
        <div className="container-fluid py-0 pb-5"> 
            <div className="row resource text-white mb-5 justify-content-center px-3 px-md-5" data-aos="fade-up"> 
                <h1 className="text-center mb-5">Select the Expert that Matches Your Web Development Requirements</h1>
                    <div className="resource-col col-12 pb-5">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <nav>
                        <div className ="nav nav-tabs mb-5" id="nav-tab" role="tablist"  >
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Resources</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Web Developer</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Software Developer</button>
                            <button className="nav-link" id="nav-designs-tab" data-bs-toggle="tab" data-bs-target="#nav-designs" type="button" role="tab" aria-controls="nav-designs" aria-selected="false">Designers</button>
                            <button className="nav-link" id="nav-digital-tab" data-bs-toggle="tab" data-bs-target="#nav-digital" type="button" role="tab" aria-controls="nav-digital" aria-selected="false">Digital Marketer</button>
                        </div>
                    </nav>
                    <div className="tab-content d-flex flex-wrap w-100 p-3" id="nav-tabContent">
                        <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row d-flex flex-wrap justify-content-center"  >
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab1.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab2.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab3.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab4.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row d-flex flex-wrap justify-content-center">
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab4.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab3.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab2.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab1.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row d-flex flex-wrap justify-content-center">
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab2.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab3.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab1.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab4.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-designs" role="tabpanel" aria-labelledby="nav-designs-tab">
                        <div className="row d-flex flex-wrap justify-content-center">
                        <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab3.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab1.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab2.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab4.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-digital" role="tabpanel" aria-labelledby="nav-digital-tab">
                        <div className="row d-flex flex-wrap justify-content-center">
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab2.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab4.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab2.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img src={Tab1.src} alt="" />
                                    <p className="mt-3">Laravel Developer</p>
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
