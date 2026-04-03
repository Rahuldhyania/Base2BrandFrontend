import Image from 'next/image'
import React from 'react'
import '../../slide/slide.css';
import '../../project.css';
import '../../slide/slider.js';
// import "../../slide/page.css"
import Icon from '/public/service-icon/1.svg'
import Icon2 from '/public/service-icon/2.svg'
import Icon3 from '/public/service-icon/3.svg'
import Icon4 from '/public/service-icon/4.svg'
import Icon5 from '/public/service-icon/5.svg'
import Icon6 from '/public/service-icon/6.svg'
import Link from 'next/link';
const ServicesCards = () => {
  return (
    <div className='b2b-black-bg py-5'>
      <div className="section-padding-hm-serv w-100 py-0">
        <div className="b2b-container-lg">
          <div className="row">
            <div className="col-md-12"  >
              <div className="text-center">
                <h2 className="b2b-heading text-center text-capitalize" data-aos="fade-up">Our Services for Your Digital Transformation </h2>
                {/* <img src="/img/underline.png" alt="" className='line_services' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="300">
            <Link href="/hire-shopify-developers">
              <div className="service_box_outer greenGradiant">
                <div className="service_box_gradiant">
                  <div className="serviceIcon">
                    <img className='IconAlign' src={Icon.src} alt="" />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Shopify <br /> Development</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow_ziqzbi.png?v=1761290860" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="300">
            <Link href="/digital-marketing">
              <div className="service_box_outer purpleGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <img className='IconAlign' src={Icon6.src} alt="" />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Digital  <br /> Marketing</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow1_kboccz.png?v=1761291173" width={1000} height={500} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="300" >
            <Link href="/e-commerce">
              <div className="service_box_outer skyBlueGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <img className='IconAlign' src={Icon2.src} alt="" />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Ecommerce  <br /> Development</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow2_sewfyv.png?v=1761291322" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="400">
            <Link href="/graphic">
              <div className="service_box_outer yellowGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <img className='IconAlign' src={Icon3.src} alt="" />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Graphic &amp; UI/UX  <br /> Designing</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow3_xbgebq.png?v=1761291413" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="400">
            <Link href="/web-application">
              <div className="service_box_outer pinkGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <img className='IconAlign' src={Icon4.src} alt="" />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Web  <br /> Development</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow4_jr71xg.png?v=1761291552" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="400">
            <Link href="/app-development">
              <div className="service_box_outer blueGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <img className='IconAlign' src={Icon5.src} alt="" />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Mobile App <br /> Development</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow5_kn2cah.png?v=1761291644" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
            <Link href='/devops-services' >
              <div className="service_box_outer pinkGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <Image className='IconAlign'
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_3_xxqr3d_1.svg" alt=""
                      width={1000}
                      height={500} />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Devops <br /> Services</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow4_jr71xg_1.png?v=1761291886" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
            <Link href='/ai-services' >
              <div className="service_box_outer greenGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <Image
                      className='IconAlign'
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_4616790_1_c7cgur_1.svg" alt=""
                      width={1000}
                      height={500} />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>AI  <br /> Services</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow4_jr71xg.png?v=1761291552" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
            <Link href='/back-office-services' >
              <div className="service_box_outer yellowGradiant">
                <div className="service_box_gradiant ">
                  <div className="serviceIcon">
                    <Image className='IconAlign'
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_1_hite70.svg"
                      alt=""
                      width={1000}
                      height={500} />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <h3 className='b2b-service-heading'>Back Office <br /> Services</h3>
                      <span className='b2b-service-text'>Learn more
                        <Image width={1000} height={500} className='arrowIcon' src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrow5_kn2cah.png?v=1761291644" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCards
