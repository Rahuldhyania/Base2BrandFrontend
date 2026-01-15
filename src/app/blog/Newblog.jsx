'use client'
import React, { useState } from 'react';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import './blognew.css';
import RequestForm from '../request-form';
import Getblogs from './Getblogs';
import backgroundimage from "/public/blognew/bannerbg.webp"
export const NewBlogBanner = ({ clicktoggleModal }) => {
    return (
        <div className='py-5 blog_banner'
            style={{ backgroundImage: `url(${backgroundimage.src})` }}
        >
            <h1 className='blog_banner_heading text-center text-white mb-0'>
                Our Recent Blogs
            </h1>
            <p className='b2b-title-text text-center pt-3'>
                We blend incredible Design and Development Skills with phenomenol Digital <br /> Marketing techniques to furnish your brand with the online solutions you deserve
            </p>
            <div className="d-flex justify-content-center pt-3">
                <p className="">
                    <button
                        onClick={clicktoggleModal}
                        className="b2b-btn b2b-btn-sm m-0"
                    >
                        Request a Quote
                    </button>
                </p>
            </div>
        </div>
    )
};

const Newblog = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
        setTimeout(function () {
            const ModalBody = document.querySelector(".request-form");
            if (ModalBody) {
                ModalBody.classList.add("transformAnim");
            }
        }, 200);
    };
    return (
        <div>
            <Header />
            <NewBlogBanner clicktoggleModal={toggleModal} />
            <div className="blue_bg">
                <div className='blog_container'>
                    <Getblogs />
                </div>
            </div>
            <Footer />
            {showModal &&
                <RequestForm onCloseModal={toggleModal} />
            }
        </div>
    )
}

export default Newblog
