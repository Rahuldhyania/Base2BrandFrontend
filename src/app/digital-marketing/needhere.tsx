'use client'
import { useEffect } from 'react';

import React from "react"; 
import logo1 from '../../../public/marketing-img/s1.png';       
import logo2 from '../../../public/marketing-img/s2.png';       
import logo3 from '../../../public/marketing-img/s3.png';       
import logo4 from '../../../public/marketing-img/s4.png';       
import logo5 from '../../../public/marketing-img/s5.png';       
import logo6 from '../../../public/marketing-img/s6.png';       
import logo7 from '../../../public/marketing-img/s7.png';       
import con from '../../../public/marketing-img/conent1.png';       
import Con1 from '../../../public/marketing-img/content2.png';       
import Con2 from '../../../public/marketing-img/content3.png';       
import Con3 from '../../../public/marketing-img/content4.png';       
import Case from '../../../public/marketing-img/case.png';       
import Case1 from '../../../public/marketing-img/case1.png';       
import '../digital-marketing/digital.css'
import Slider from "react-slick";

export default function needhere() {
  const settings = {
    dots: false,
    arrows: true, 
    speed: 500,
    centerMode: true,
    slidesToShow: 3,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <>  
        <div className="p-5  NeedHere"> 
    <div className="container-fluid"> 
    <div className="row">
    <div className="col-md-12 mx-auto text-center text-white mb-5" >
        <h2>OUR SERVICES</h2>
        <p>We don rely on smoke and mirrors to attract clients. Instead, we employ our expertise in digital marketing skills to drive real growth for your business. Let our proven strategies speak for themselves as we help you succeed online.</p>
      </div>
    <div className="p-3">
    {/* <Slider {...settings} className="slider">
        <div className='single-img'>
        <img src={logo1.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>Search Engine Optimization </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        <div className='single-img'>
        <img src={logo2.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>MEDIA BUYER</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        <div className='single-img'>
        <img src={logo3.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>GOOGLE ADS (PPC)</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        <div className='single-img'>
        <img src={logo4.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>YOUTUBE MARKETING</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        <div className='single-img'>
        <img src={logo5.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>SOCIAL MEDIA OPTIMIZATION</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        <div className='single-img'>
        <img src={logo6.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>ONLINE REPUTATION MANAGMENT</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        <div className='single-img'>
        <img src={logo7.src} className='slider__item w-100' /> 
          <div className="hoverEffect img-overlay">
        <div className="d-flex align-items-center h-100">
          <div>
            <h3>CONTENT WRITING</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</p>
            <p>took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button>
            </div>
            </div>
          </div>
        </div>
        </Slider>  */}








      <div className='slider-grid row'>
          <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo1.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Search Engine Optimization (SEO)</h3>
                <p>Boost your online visibility with our expert SEO services at Base2Brand. Did you know? 93% of online experiences start with a search engine. Our team utilizes proven strategies to improve your search engine rankings, drive organic traffic, and increase your website visibility. </p>
                <p>From keyword research to on-page optimization and link building, we tailor our approach to meet your business goals and maximize your online presence.</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>

            <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo2.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Facebook/Insta Ads</h3>
                <p>Supercharge your social media presence with targeted Facebook and Instagram Ads. With over 3.5 billion active users combined, these platforms offer unparalleled reach for businesses.</p>
                <p>Instagram has a 2.7% higher engagement rate than other social media platforms. Our team crafts compelling ad campaigns to drive conversions, increase brand awareness, and connect you with your ideal audience effectively.</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>

            <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo3.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Google Ads (PPC)</h3>
                <p>Businesses make an average of $2 in revenue for every $1 spent on Google Ads. Our digital marketing team will help you to maximize your online advertising potential with Google Ads (PPC)</p>
                <p>Google processes over 3.5 billion searches per day, tapping into this vast audience with Google Ads is essential for businesses. Our experts craft targeted campaigns to increase your website traffic, generate leads, and boost your ROI efficiently.</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>
            
            <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo4.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Youtube Marketing</h3>
                <p>YouTube Marketing involves promoting your brand, products, or services through engaging video content on the platform. At Base2Brand, we specialize in leveraging YouTube vast audience to drive business profits.</p>
                <p>From creating compelling video ads to optimizing content for search visibility, we help businesses increase brand awareness, generate leads, and boost conversions. Let us harness the power of YouTube to grow your business and drive profits effectively.</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>

            <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo5.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Social Media Optimization (SMO)</h3>
                <p>Social Media Optimization (SMO) involves optimizing social media platforms to enhance brand visibility and engagement. At Base2Brand, we excel in SMO strategies tailored to your business goals.</p>
                <p>From creating engaging content to fostering community engagement and leveraging analytics for performance insights, we ensure your brand stands out on social media. Let us help you optimize your social presence and drive meaningful results for your business.</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>

            <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo6.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Online Reputation Management (ORM)</h3>
                <p>Online Reputation Management (ORM) involves monitoring, influencing, and managing your brands online reputation. Studies show that 91% of consumers trust online reviews as much as personal recommendations.</p>
                <p>At Base2Brand, we specialize in ORM strategies to safeguard your brands reputation, address negative feedback, and promote positive sentiments. Let us help you maintain a stellar online reputation, build trust with your audience, and drive business success</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>

            <div className='single-img col-12 col-sm-6 col-md-6 col-lg-4'>
            <img src={logo7.src} className='slider__item w-100' /> 
              <div className="hoverEffect img-overlay">
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>Content Writing</h3>
                <p>Our Content Writing service offers compelling, SEO-friendly content tailored to your brands needs. From blog posts to website copy and social media content, we craft engaging narratives that resonate with your audience.</p>
                <p>With quality content driving 61% more leads, our team ensures every piece aligns with your brand voice and objectives, helping you stand out in the digital landscape and drive meaningful engagement and conversions.</p>
                {/* <button className="btn btn-outline-primary mt-5 m-0"> Request a Quote </button> */}
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>



        <div className="row">
          <div className="col-md-12 text-center text-white mb-5 mt-5 pt-5">
            <h2 className='heading_content'>Why Choose Us?</h2>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contentBox">
              <img src={con.src} className='icon' alt="" />
                <div className='d-flex flex-wrap'>
                  <h4>Expertise</h4>
                  <p className='mb-0'>Our team comprises seasoned professionals with years of experience in digital marketing, ensuring top-notch strategies and results-driven campaigns tailored to your business needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contentBox">
              <img src={Con1.src} className='icon' alt="" />
              <div className='d-flex flex-wrap'>
                <h4>Customized Solutions</h4>
                <p className='mb-0'>We understand that every business is unique, so we craft personalized strategies that align with your goals and objectives, delivering tailored solutions for maximum impact.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contentBox">
              <img src={Con2.src} className='icon' alt="" />
              <div className='d-flex flex-wrap'>
              <h4>Transparency</h4>
              <p className='mb-0'>We believe in open communication and transparency throughout our partnership, providing regular updates, performance reports, and insights to keep you informed every step of the way.</p>
            </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contentBox">
              <img src={Con3.src} className='icon' alt="" />
              <div className='d-flex flex-wrap'>
              <h4>Proven Results</h4>
              <p className='mb-0'>With a track record of success and satisfied clients, we deliver tangible results that drive business growth, whether it increased website traffic, higher conversion rates, or improved brand visibility.</p>
            </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contentBox">
              <img src={con.src} className='icon' alt="" />
              <div className='d-flex flex-wrap'>
              <h4>Innovative Approach</h4>
              <p className='mb-0'>We stay ahead of the curve with cutting-edge tools, techniques, and trends in digital marketing, ensuring our strategies are always fresh, relevant, and effective in today ever-evolving landscape.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contentBox">
              <img src={Con1.src} className='icon' alt="" />
              <div className='d-flex flex-wrap'>
              <h4>Dedicated Support</h4>
              <p className='mb-0'>Our team is committed to your success, offering dedicated support, guidance, and expertise to help you navigate the complexities of digital marketing and achieve your business objectives efficiently and effectively.</p>
              </div>
            </div>
          </div>
         
        </div>
        
{/* <div className="row text-white align-items-center">
      <div className="col-md-9 mx-auto text-center" data-aos="fade-up">
        <h2>OUR SERVICES</h2>
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>

          <div className="col-md-4 mt-5" data-aos="fade-left">
            <div className="needBox">
                <img src={logo1.src} alt="" />
                <div className="p-3 pb-5">
                    <h4 className='mt-3 mb-3'>Search Engine Optimization </h4>
                    <p className='font-weight-normal'>What’s the use of having a beautiful website if it can’t be discovered by the people looking for the services you offer?</p>
                    <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

          <div className="col-md-4 mt-5" data-aos="zoom-in">
            <div className="needBox">
                <img src={logo2.src} alt="" />
                <div className="p-3 pb-5">
                    <h4 className='mt-3 mb-3'>YouTube Marketing </h4>
                    <p className='font-weight-normal'>Your target audience spends a lot of their time watching videos on YouTube. YouTube marketing experts at our...</p>
                    <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

          <div className="col-md-4 mt-5" data-aos="fade-left">
            <div className="needBox">
                <img src={logo3.src} alt="" />
                <div className="p-3 pb-5">
                    <h4 className='mt-3 mb-3'>Content Writing</h4>
                    <p className='font-weight-normal'>Content is the heart of your website. It the basis for your SEO and why people visit it. Base2Brand will create...</p>
                    <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>


          <div className="col-md-4 mt-5" data-aos="zoom-in">
            <div className="needBox">
                <img src={logo4.src} alt="" />
                <div className="p-3 pb-5">
                    <h4 className='mt-3 mb-3'>PPC management</h4>
                    <p className='font-weight-normal'>A data-driven PPC campaign will ensure that you reach your customers in a quick and précised manner...</p>
                    <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

          <div className="col-md-4 mt-5" data-aos="fade-left">
            <div className="needBox">
                <img src={logo5.src} alt="" />
                <div className="p-3 pb-5">
                    <h4 className='mt-3 mb-3'>Online Reputation Management</h4>
                    <p className='font-weight-normal'>Our digital marketing agency in Chandigarh also offers Online Reputation Management services. We use various online reputation...</p>
                    <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>
          <div className="col-md-4 mt-5" data-aos="zoom-in">
            <div className="needBox">
                <img src={logo6.src} alt="" />
                <div className="p-3 pb-5">
                    <h4 className='mt-3 mb-3'>Social media Management</h4>
                    <p className='font-weight-normal'>The best way to provide customer service to your existing customers and generate high quality leads for your business is by...</p>
                    <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

     </div>  */}
</div>
</div>

{/* <div className="bg-black p-5">
     <div className="row">
      <div className="text-center mb-5 pt-4">
        <h2 className='heading_content text-white'>LASTEST CASE STUDIES</h2>
      </div>
      <div className="col-md-6">
        <img src={Case.src} className='caseImg' alt="" />
        <h4 className='mt-4 text-white'>Keepwith</h4>
      </div>
      <div className="col-md-6">
        <img src={Case1.src} alt="" className='case2' />
        <h4 className='mt-4 text-white'>Illumination</h4>
      </div>
     </div>
</div> */}
</>
)
}