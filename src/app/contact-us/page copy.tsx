"use client";

import React, { useState , ChangeEvent  } from "react";
import Header from "../../../component/header";  
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import Contact from "../../../public/contact-us/contact.png";
import Wanna from "../../../public/contact-us/wanna.png";
import Loader from "../../../public/img/loader.gif";
import "../../../src/app/contact-us/contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

  function ContactUs() { 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        service: 'web development',
        message: ''
    });

    // Event handler function
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }; 

    // Form submission handler function
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        try {
            // Your form submission logic goes here
            const response = await fetch('https://empmgt.base2brand.com/submit-contect-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success, maybe show a success message
                toast.success('Form submitted successfully'); 
            } else { 
                toast.error('Failed to submit form');
            }
        } catch (error) {
            toast.error('Error submitting form'); 
        } 
    };
  return (
    <>
      <Header />
      <div className="bg-black pt-5 pb-5">
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center text-white">
                <h2 className="text_primary">Let Meet Together</h2>
                <p>We will be obliged to have a word with you, if there is anything that you want to ask or <br /> know about, feel free to contact us. Our details are given below:</p>
            </div>
            <div className="col-md-12">
            <div className="bgWhite mt-5">
            <div className="row">
            <div className="col-md-6">
             <div className="bgImg text-white" style={{
      backgroundImage: `url(${Contact.src})`,
      width: '100%',
      height: '750px',   
    }}>
                <h2>Contact Information</h2>
                <p className="mb-5 pb-5">Say something to start a live chat!</p>
                <div className="d-flex mt-5 pt-4">
             <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                <div className="contact ml-4">
                    <a>+91 9041700209</a> <br />
                    <a>+91 8360116967</a>
                </div>
             </div>
             <div className="d-flex mt-5">
             <i className="fa fa-envelope" aria-hidden="true"></i>
                <div className="conatct ml-4">
               <a>tech@base2brand.com</a>
                </div>
             </div>
             <div className="d-flex mt-5">
             <i className="fa fa-map-marker" aria-hidden="true"></i>
                <div className="conatact ml-4">
                <p className="mb-1">F-209, Industrial area</p>
                <p>Phase 8-B, Sector 74, Mohali, 160074</p>
                </div>
             </div>
                    <div className="icons mt-5 pt-5">
                <a className="social"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a className="social"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a className="socialFacebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
             </div>
             </div>
            
            </div>
            <div className="col-md-6">
            <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="form-label">Name</label>
                <input type="text" className="form-control removeBorder" name="name" value={formData.name} onChange={handleChange}   aria-describedby="emailHelp" required/> 
            </div>
            <div className="mb-5">
                <label className="form-label">Phone No.</label>
                <input type="number" className="form-control removeBorder" name="phoneNo" value={formData.phoneNo} onChange={handleChange}  required/>
            </div>
            <div className="mb-5">
                <label className="form-label">Email</label>
                <input type="email" className="form-control removeBorder" name="email"   value={formData.email} onChange={handleChange}  required/>
            </div>
            <div className="mb-5">
                <label className="form-label">Select Services</label>
                <select className="form-control removeBorder" id="" name="service" value={formData.service} onChange={handleChange}  required> 
                    <option value="digital marketing">Digital Marketing</option>
                    <option value="ecommerce development">Ecommerce Development</option>
                    <option value="graphic design">Graphic Design</option> 
                    <option value="web development">Web Development</option>
                    <option value="mobile app development">Mobile App Development</option>
                </select>
            </div>
            <div className="mb-5">
                <label className="form-label">Message</label>
                <textarea className="form-control removeBorder" id="" name='message' value={formData.message} onChange={handleChange}  required></textarea>
            </div>
            
                <div className="text-right">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            
          
            </form>
            </div>
           
            </div>
            </div>  
            </div>
            <div className="col-md-12 mt-5 pt-4">
                <h1 className="text-center text-white">Wanna Hire Us?</h1>
                <img src={Wanna.src} className="w-100" alt="" />
            </div>
            </div>
        </div>
 
        <Quote/>
        <Footer />
       
      </div>
    </>
  );
};

export default ContactUs;