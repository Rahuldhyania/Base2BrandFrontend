'use client'
import React, { useRef, useState, useEffect } from "react";
// import design1 from '../../../public/shopify/design1.svg'; 
// import design2 from '../../../public/shopify/design2.svg'; 
// import design3 from '../../../public/shopify/design3.svg'; 
// import design4 from '../../../public/shopify/design4.svg'; 
// import design5 from '../../../public/shopify/design5.svg'; 

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';
// import TabSlick from './tab-slick';
import '../shopify/service.css'
import Slider from 'react-slick';
import Image from "next/image";

export default function MobileTabs() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <>
            <div className="designTabsWrap mobileTabsShopify b2b-gray-bg">
                <div className="b2b-container-lg">
                    <div className="row">
                        <div className="col-lg-12 m-auto">
                            <div className="mb-3 designTabs mobile_block">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    swipeToSlide={false}
                                    autoplay={false}
                                    arrows={true}
                                    focusOnSelect={true}
                                    speed={800}
                                >
                                    <a>
                                        <button className=" active btn_design" id="pill1-tab" data-bs-toggle="pill" data-bs-target="#pill1" type="button" role="tab" aria-controls="pill1" aria-selected="true">
                                            <span><Image
                                                width="100"
                                                height="100"
                                                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design1_bh21jb.svg " alt="" /></span>
                                        </button>
                                    </a>
                                    <a>
                                        <button className=" active btn_design" id="pill2-tab" data-bs-toggle="pill" data-bs-target="#pill2" type="button" role="tab" aria-controls="pill2" aria-selected="false">
                                            <span><Image
                                                width="100"
                                                height="100"
                                                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design2_jmv9fb.png" alt="" /></span>
                                        </button>
                                    </a>
                                    <a>
                                        <button className="active btn_design" id="pill3-tab" data-bs-toggle="pill" data-bs-target="#pill3" type="button" role="tab" aria-controls="pill3" aria-selected="false">
                                            <span><Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design3_fwv8ep.png" alt="" /></span>
                                        </button>
                                    </a>
                                    <a>
                                        <button className="active btn_design" id="pill4-tab" data-bs-toggle="pill" data-bs-target="#pill4" type="button" role="tab" aria-controls="pill4" aria-selected="false">
                                            <span><Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design4_acamse.png" alt="" /></span>
                                        </button>
                                    </a>
                                    <a>
                                        <button className="active btn_design" id="pill5-tab" data-bs-toggle="pill" data-bs-target="#pill5" type="button" role="tab" aria-controls="pill5" aria-selected="false">
                                            <span><Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/design5_jlmznw.png" alt="" /></span>
                                        </button>
                                    </a>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="designTabsContentWrap mobileTabsContentShopify">
                <div className="b2b-container-lg">
                    <div className="row">
                        <div className="col-lg-12 m-auto p-0">
                            <div className="tab-content" id="pills-tabContent">

                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                                    autoplay={false}
                                    arrows={false}
                                    dots={false}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    speed={800}
                                    fade={true}
                                    adaptiveHeight={true}
                                >
                                    <div>
                                        <Tab1 />
                                    </div>
                                    <div>
                                        <Tab2 />
                                    </div>
                                    <div>
                                        <Tab3 />
                                    </div>
                                    <div>
                                        <Tab4 />
                                    </div>
                                    <div>
                                        <Tab5 />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}