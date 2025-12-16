"use client"
// import { Player } from "@lottiefiles/react-lottie-player";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, ChangeEvent } from "react";
import radialRight from '../../public/img/radial-right.svg';
// import '../../app/our-project.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./callcenter.css"

export default function csupport() {
    const [cpopup, setpopup] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        mobileNo: '',
        message: ''
    });
    // const [cpopup,setpopup] = useState(false)
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
                    lastname: '',
                    email: '',
                    mobileNo: '',
                    message: ''
                });
            } else {
                toast.error('Failed to submit form');
            }
        } catch (error) {
            toast.error('Error submitting form');
        }
    };
    return (
        <>
            <button
                className="b2b-btn b2b-btn-sm  m-0"
                onClick={() => setpopup(!cpopup)}
            >
                Book a Free Demo
            </button>
            <div className={!cpopup ? "customer_popup" : "customer_popup open_popup"}>

                <div className="footer-map ">
                    <div className="container md-5 b2b-overflow-hidden">

                        <div className="row  justify-content-center">
                            <div className="col-lg-6 col-md-12  text-white d-flex align-items-center b2b_form_white ps-5 pt-3 pe-5 customer_main_form">
                                <form className="footer-form d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>

                                    <div className="row w-100">
                                        <div className="close_popup b2b_form_white col-lg-12 d-flex justify-content-between" >
                                             <h2 className="b2b-heading cus_form_heading">Let's Reach Out To Us</h2> 
                                             <svg onClick={() => setpopup(!cpopup)} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" d="m6 6l12 12m0-12L6 18"/></svg>
                                        </div>
                                        <h4 className="b2b-partners-heading cus_form_heading2">Fill Out the Form</h4>
                                        <div className="col-lg-12 mb-3 pt-2">
                                            <input type="text" className="cusomer_form_d" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <input type="text" className="cusomer_form_d" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <input type="email" className="cusomer_form_d" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <input type="number" className="cusomer_form_d" name="mobileNo" placeholder="Phone" value={formData.mobileNo} onChange={handleChange} required
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const inputElement = e.target as HTMLInputElement; // Cast the target to HTMLInputElement
                                                    inputElement.value = inputElement.value.replace(/[^0-9]/g, ''); // Only allows digits
                                                }} />
                                        </div>

                                        <div className="col-lg-12 mb-3" id="form_customer_message"> 
                                            <textarea className="cusomer_form_d" id="" name='message' placeholder="Message" value={formData.message} onChange={handleChange} maxLength={200} required></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-3 pt-1 pb-2">
                                            <button type="submit" className="form-btn">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* </div> */}
        </>
    )
}
