'use client'

import React, { useState, ChangeEvent } from "react";
import Image from 'next/image';
import radialRight from '../../public/img/radial-right.svg';
import './our-project.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';


export default function FooterMap() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNo: '',
        service: '', // Array to store selected services
        companyName: 'base2brand',
        country: 'India',
        comment: ''
    });

    // console.log("formData", formData);

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('https://adminbackend.base2brand.com/api/B2Badmin/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                toast.success('Form submitted successfully');
                setFormData({
                    name: '',
                    email: '',
                    mobileNo: '',
                    service: '',
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
        <div>
            <div className="footer-map b2b-black-bg " style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial-right_ozqeha.svg")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
                <div className="container pt-md-5 pt-3 pb-5 b2b-overflow-hidden">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-5 m-auto'>
                            <h2 className='text-center b2b-main-heading text-uppercase' data-aos="fade-up">Get In Touch With Us</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 text-center mb-5 mb-md-0">
                            <div className="mapWrapper mapWrapper-lg">
                                <Image className="m-auto" src="app/map_nfrjer.svg" width="890" height="480" alt="Map" data-aos="zoom-in-up" data-aos-delay="300" />
                                <div className="address1" data-aos="zoom-in" data-aos-delay="600">
                                    <span data-tooltip-id="my-tooltip-1" className="addressDot"></span>
                                </div>
                                <Tooltip
                                    id="my-tooltip-1"
                                    className="tooltipText"
                                    place="top"
                                    html="<p class='tooltipTitle'>USA</p>
                                        7311 Gladys Ave El Cerrito CA 94530,<br/> USA, +1 720 9035933"
                                />
                                <div className="address2" data-aos="zoom-in" data-aos-delay="700">
                                    <span data-tooltip-id="my-tooltip-2" className="addressDot"></span>
                                </div>
                                <Tooltip
                                    id="my-tooltip-2"
                                    className="tooltipText"
                                    place="top"
                                    html="<p class='tooltipTitle'>Uk</p>
                                       	7 Snow Avenue, Blaby, LE8 4BR,<br />
                                        UK +44 7448435973"
                                />
                                <div className="address3" data-aos="zoom-in" data-aos-delay="800">
                                    <span data-tooltip-id="my-tooltip-3" className="addressDot"></span>
                                </div>
                                <Tooltip
                                    id="my-tooltip-3"
                                    className="tooltipText"
                                    place="top"
                                    html="<p class='tooltipTitle'>India (headquarter) </p>
                                        F-209, Industrial area Phase 8-B,<br />
                                        Sector 74, Mohali, 160074 +91 9872487850"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-white" data-aos="fade-up">
                            <form className="footer-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <input type="text" className="form-control removeBorder" name="name" placeholder="Name" value={formData.name} onChange={handleChange} aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <input type="email" className="form-control removeBorder" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <input type="number" className="form-control removeBorder" name="mobileNo" placeholder="Phone" value={formData.mobileNo} onChange={handleChange} required
                                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                const inputElement = e.target as HTMLInputElement;
                                                inputElement.value = inputElement.value.replace(/[^0-9]/g, '');
                                            }} />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <select
                                            className="form-control removeBorder"
                                            id=""
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" selected>
                                                Select Services
                                            </option>
                                            <option value="digital marketing">Digital Marketing</option>
                                            <option value="ecommerce development">Ecommerce Development</option>
                                            <option value="graphic design">Graphic Design</option>
                                            <option value="web development">Web Development</option>
                                            <option value="mobile app development">Mobile App Development</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <textarea className="form-control removeBorder" name="comment" placeholder="Your comment" value={formData.comment} onChange={handleChange} maxLength={200} required></textarea>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <button type="submit" className="form-btn">Send comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}