"use client";

import React, { useState ,useContext, ChangeEvent , useEffect,useMemo   } from "react"; 
import Select from 'react-select'
import countryList from 'react-select-country-list' 

import Header from "../../../component/header";  
import Footer from "../../../component/footer";
import "../../../src/app/contact-us/contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import radialBg from '../../../public/img/radial_bg.svg';
import contactImg from '../../../public/contact-us/contactImg.svg';
import Icon1 from '../../../public/contact-us/icon1.svg';
import Icon2 from '../../../public/contact-us/icon2.svg';
import Icon3 from '../../../public/contact-us/icon3.svg';
import Icon4 from '../../../public/contact-us/icon4.svg';
import googleTag from '../../../public/contact-us/google-tag.svg';
import starRating from '../../../public/contact-us/star-rating.svg';

import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";
import  { AppStateContext }  from "../context/AppStateContext";
import Newcontactform from "./Newcontactform";
 
  function ContactUs() { 
    const [loading, setLoading] = useState(false);
    const context = useContext(AppStateContext);
    console.log(context, 'contextcontextvvvvvvvvvvvv'); // This should now show both `blogsRoute` and `setBlogsRoute`

    if (!context) {
        throw new Error("useContext(AppStateContext) must be used within an AppStateProvider");
    } 
    const { blogsRoute, setBlogsRoute } = context;
     
    const baseURL = "https://base2brand.com/contact-us";
    const wwwURL = "https://www.base2brand.com/contact-us";
    let canonical = ''; 
    if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www."); 
      canonical = isUsingWWW ? wwwURL : baseURL;
    }
   

    const PageMeta={
        title:"Get in Touch (Schedule a Consultation)",
        description:"Learn about Base2Brand India: Our mission, values, and history of driving client success. Explore our story and connect with us to grow your business.",
        canonical: canonical,
        image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
      };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNo: '',
        service: '',
        companyName:'',
        country:'',
        comment: ''
    });
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value);
        setFormData({
            ...formData,
            country: value.label  // Assuming value is an object like {label: 'Country Name', value: 'Country Code'}
        });
    };
    // Event handler function
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }; 

    // Form submission handler function
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        try {
            // Your form submission logic goes here
            const response = await fetch('https://adminbackend.base2brand.com/api/B2Badmin/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Handle success, maybe show a success comment
                toast.success('Form submitted successfully');
                setFormData({
                    name: '',
                    email: '',
                    mobileNo: '',
                    service: '',  
                    companyName: '',
                    country: '',
                    comment: ''
                });
            } else {
                toast.error('Failed to submit form');
            }
        } catch (error) {
            toast.error('Error submitting form');
        }
        finally {
            // Re-enable the button after the submission attempt
            setLoading(false);
        }
    };
    

    const showForm = async () => {
        const firstForm = document.querySelector(".secondForm");
        firstForm.classList.add("show");
        return false;
    };

    const handleClick = (event) => {
        event.preventDefault();
        showForm();
    };
    const [times, setTimes] = useState({
        indiaTime: '',
        canadaTime: '',
        ukTime: '',
        usaTime: ''
    });

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
    
        setFormData((prevData) => {
            // Get the current services as a comma-separated string
            const currentServices = prevData.service ? prevData.service.split(',') : [];
    
            // Add or remove the service from the list
            const updatedServices = checked
                ? [...currentServices, value] // Add the selected service
                : currentServices.filter((service) => service !== value); // Remove if unchecked
    
            // Join the updated services as a comma-separated string
            return {
                ...prevData,
                service: updatedServices.join(',')
            };
        });
    };
    
    
    
    useEffect(() => {
        // Function to update time based on time zones
        const updateTime = () => {
            const indiaTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit' });
            const canadaTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour: '2-digit', minute: '2-digit' });
            const ukTime = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London", hour: '2-digit', minute: '2-digit' });
            const usaTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour: '2-digit', minute: '2-digit' });

            setTimes({
                indiaTime,
                canadaTime,
                ukTime,
                usaTime
            });
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // Update every 1 minute
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);
  return (
    <>
      <PageHead PageMeta={PageMeta}/>
      <head>
    <meta property="og:title" content={PageMeta.title} />
    <meta property="og:description" content={PageMeta.description} />
    </head>
      <Header /> 
      <div className="pt-0 pb-0 b2b-black-bg">
            <div className="about-mask pt-md-5 pt-3" style={{backgroundImage: `url(${radialBg.src})`,backgroundRepeat: 'no-repeat'}}>
              <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        
                       <Newcontactform />
                        
                    </div>
                    <div className="col-md-5 call-us-wrap" >
                        <div className="contact-img" data-aos="fade-up" data-aos-delay="300">
                            {/* <img src={contactImg.src} alt="" /> */}
                            <Player
                                src='/json/banner/Contact us.json'
                                loop
                                autoplay
                                className="animated-imgs animated-contact-img"
                                />
                        </div>
                        <div className="call-us mobileHide">
                            <ul>
                                <li className="mail" data-aos="fade-up" data-aos-delay="300"><a href="mailto:tech@base2brand.com ">tech@base2brand.com </a></li>
                                <li className="phone-link Ind" data-aos="fade-up" data-aos-delay="300"><span>IND: </span><a href="tel:+918360116967">+918360116967</a></li>
                                <li className="phone-link" data-aos="fade-up" data-aos-delay="300"><span>USA: </span><a href="tel:+1720903-5933">+1 720 9035933</a></li>
                                <li className="phone-link" data-aos="fade-up" data-aos-delay="300"><span>UK: </span><a href="tel:+442080953232">+442080953232</a></li>
                                <li className="phone-link" data-aos="fade-up" data-aos-delay="300"><span>UK: </span><a href="tel:+4407448435973">+4407448435973</a></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="b2b-gray-bg my-lg-5 my-3 w-100 py-5" data-aos="fade-up" data-aos-delay="300">
                <div className="b2b-container-lg">
                    <div className="row addressRow ">
                        <div className="col-12 col-lg-4 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>INDIA</h3>
                                        <p>{times.indiaTime}</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon1.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>F-209, Industrial area<br />
                                        Phase 8-B, Sector 74, Mohali, 160074 <br/>+91 9872487850</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>CANADA</h3>
                                        <p>09:10 PM</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon2.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>Ms Ady 114, Bellchase Trail Brampton<br />
                                    ON L6P 3LA +1(416) 879-22444</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12 col-lg-4 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>UK</h3>
                                        <p>{times.ukTime}</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon3.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>7 Snow Avenue, Blaby, LE8 4BR, <br />
                                    UK +44 2080953232 <br />
                                    UK +44 7448435973 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>USA</h3>
                                        <p>{times.usaTime}</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon4.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>7311 Gladys Ave El Cerrito CA 94530,<br />
                                    USA, +1 720 9035933</p>
                                </div>
                            </div>
                            
                        </div>  
                        {/* <div className="col-12 col-lg-3 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                    <h3>CANADA</h3>
                                    <p>{times.canadaTime}</p>
                                    </div>
                                    <div className="address-icon">
                                    <img src={Icon2.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                <p>Ms Ady 114, Bellchase Trail Brampton<br />
                                ON L6P 3LA +1(416) 879-22444</p>
                                </div>
                            </div>
                            
                        </div>   */}
                    </div>
                </div>
            </div>
        <Footer />
       
      </div>
    </>
  );
};

export default ContactUs;