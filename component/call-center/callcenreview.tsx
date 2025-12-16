
// import { Player } from "@lottiefiles/react-lottie-player";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, ChangeEvent } from "react";
import radialRight from '../../public/img/radial-right.svg';
// import '../../app/our-project.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';


export default function FooterMap() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNo: '',
        service: '',
        companyName: 'base2brand',
        country: 'India',
        comment: ''
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
                    service: '', // reset to default selected value 
                    companyName: 'base2brand',
                    country: 'India',
                    comment: ''
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
            <div className="footer-map b2b-black-bg " style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
                <div className="container md-5 pt-3 pb-5 b2b-overflow-hidden">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 header-columns p-5 pt-3 m-autoc '>
                            <h2 className='text-center b2b-main-heading ' data-aos="fade-up">Partner with Us for Unmatched Customer Support Services</h2>
                            <p className="review_text text-center col-lg-8 col-md-12 col-sm-12 m-auto" data-aos="fade-up">
                                Choose Base2Brand for expert Customer Support services. With award-winning solutions and a customer-first approach,  we deliver
                                exceptional support, from technical help to sales, boosting your brand and customer satisfaction.
                            </p>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 mt-4 text-white d-flex align-items-center" data-aos="fade-up">
                            <form className="footer-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <input type="text"  className="form-control removeBorder" name="name" placeholder="Name" value={formData.name} onChange={handleChange} aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <input type="email" className="form-control removeBorder" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <input type="number" className="form-control removeBorder" name="mobileNo" placeholder="Phone" value={formData.mobileNo} onChange={handleChange} required
                                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                const inputElement = e.target as HTMLInputElement; // Cast the target to HTMLInputElement
                                                inputElement.value = inputElement.value.replace(/[^0-9]/g, ''); // Only allows digits
                                            }} />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <select className="form-control removeBorder" id="" name="service" value={formData.service} onChange={handleChange} required>
                                            <option value="" selected>Select Services</option>
                                            <option value="digital marketing">Digital Marketing</option>
                                            <option value="ecommerce development">Ecommerce Development</option>
                                            <option value="graphic design">Graphic Design</option>
                                            <option value="web development">Web Development</option>
                                            <option value="mobile app development">Mobile App Development</option>
                                            <option value="customer support">Customer Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <textarea className="form-control removeBorder" id="" name='comment' placeholder="Your comment" value={formData.comment} onChange={handleChange} maxLength={200} required></textarea>
                                    </div>
                                    <div className="col-lg-12 mb-3 pt-4">
                                        <button type="submit" className="form-btn">Send comment</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 text-center mb-3 mb-md-0 mt-4" data-aos="fade-up"  >

                            {/* <img src={reviewbanner.src} alt="" className="lower_banner" /> */}
                            {/* /json/banner/home page.json*/}
                            <Player
                                src='/json/banner/6MzeMAq9gi.json'
                                loop
                                autoplay
                                className="animated-imgs animated-banner-img"
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
