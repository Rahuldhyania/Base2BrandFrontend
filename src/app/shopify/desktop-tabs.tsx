'use client'
import { useEffect } from 'react';

import React from "react";
import design1 from '../../../public/shopify/design1.svg';
import design2 from '../../../public/shopify/design2.svg';
import design3 from '../../../public/shopify/design3.svg';
import design4 from '../../../public/shopify/design4.svg';
import design5 from '../../../public/shopify/design5.svg';

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';
// import TabSlick from './tab-slick';
import '../shopify/service.css'
import Image from 'next/image';

export default function DesktopTabs() {


     return (
          <>

               <div className='tabMainWrap'>
                    <div className="designTabsWrap b2b-gray-bg sticky_tabs">
                         <div className="b2b-container-lg">
                              <div className="row">
                                   <div className="col-lg-12 m-auto">
                                        <ul className="row row-cols-5 nav nav-pills mb-3 designTabs" id="pills-tab" role="tablist">
                                             <li className="nav-item" role="presentation">
                                                  <button className=" active btn_design" id="pill1-tab" data-bs-toggle="pill" data-bs-target="#pill1" type="button" role="tab" aria-controls="pill1" aria-selected="true">
                                                       App <br />Development
                                                       <span><Image
                                                            width="100"
                                                            height="100"
                                                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design1_bh21jb.svg" alt="" /></span>
                                                  </button>
                                             </li>
                                             <li className="nav-item" role="presentation">
                                                  <button className=" btn_design" id="pill2-tab" data-bs-toggle="pill" data-bs-target="#pill2" type="button" role="tab" aria-controls="pill2" aria-selected="false">
                                                       Custom <br />Integration
                                                       <span><Image
                                                            width="100"
                                                            height="100"
                                                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design2_jmv9fb.png" alt="" /></span>
                                                  </button>
                                             </li>
                                             <li className="nav-item" role="presentation">
                                                  <button className=" btn_design" id="pill3-tab" data-bs-toggle="pill" data-bs-target="#pill3" type="button" role="tab" aria-controls="pill3" aria-selected="false">
                                                       Headless Store <br />Development
                                                       <span><Image
                                                            width="100"
                                                            height="100"
                                                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design3_fwv8ep.png" alt="" /></span>
                                                  </button>
                                             </li>
                                             <li className="nav-item" role="presentation">
                                                  <button className=" btn_design" id="pill4-tab" data-bs-toggle="pill" data-bs-target="#pill4" type="button" role="tab" aria-controls="pill4" aria-selected="false">
                                                       CRO ( Conversation <br />Rate Optimization)
                                                       <span><Image
                                                            width="100"
                                                            height="100"
                                                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design4_acamse.png" alt="" /></span>
                                                  </button>
                                             </li>
                                             <li className="nav-item" role="presentation">
                                                  <button className=" btn_design" id="pill5-tab" data-bs-toggle="pill" data-bs-target="#pill5" type="button" role="tab" aria-controls="pill5" aria-selected="false">
                                                       E-commerce <br />Store Design
                                                       <span><Image
                                                            width="100"
                                                            height="100"
                                                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design5_jlmznw.png" alt="" /></span>
                                                  </button>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="designTabsContentWrap">
                         <div className="px-3">
                              <div className="row">
                                   <div className="col-lg-12 m-auto">
                                        <div className="tab-content" id="pills-tabContent">
                                             <div className="tab-pane fade show active" id="pill1" role="tabpanel" aria-labelledby="pill1-tab">
                                                  <div>
                                                       <Tab1 />
                                                  </div>
                                             </div>
                                             <div className="tab-pane fade" id="pill2" role="tabpanel" aria-labelledby="pill2-tab">
                                                  <div>
                                                       <Tab2 />
                                                  </div>
                                             </div>
                                             <div className="tab-pane fade" id="pill3" role="tabpanel" aria-labelledby="pill3-tab">
                                                  <div>
                                                       <Tab3 />
                                                  </div>
                                             </div>
                                             <div className="tab-pane fade" id="pill4" role="tabpanel" aria-labelledby="pill4-tab">
                                                  <div>
                                                       <Tab4 />
                                                  </div>
                                             </div>
                                             <div className="tab-pane fade" id="pill5" role="tabpanel" aria-labelledby="pill5-tab">
                                                  <div>
                                                       <Tab5 />
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