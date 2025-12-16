'use client'
import React, { useState } from "react"; 
import FormImg from "../../public/img/hiring.jpg";
import './form.css';  
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ModalProps {
    onCloseModal: () => void;
}

const ApplyForm: React.FC<ModalProps> = ({ onCloseModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        designation:'',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Your form submission logic goes here
            const response = await fetch('https://empmgt.base2brand.com/apply-jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success, maybe show a success message
                toast.success('Form submitted successfully');
                 onCloseModal();


            } else {
                toast.error('Failed to submit form');

            }
        } catch (error) {
            toast.error('Error submitting form');
        }
    };

 

    return (
        <div className="modal request-form fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content p-0"> 
                    <div className="modal-body p-0">
                        <div className="row pr-3">
                            <div className="col-md-6 pl-3">
                            <img src={FormImg.src} alt="" className="w-100 request_img apply_jobs" /> 
                            </div>
                            <div className="col-md-6">
                            <div className="d-flex justify-content-between pr-2 pt-2 align-items-center mb-3">
                                <h4 className="modal-title text-center" id="exampleModalLabel">Apply Jobs</h4>
                                <button type="button" onClick={onCloseModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> 
                            <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input type="number" className="form-control" id="phoneNumber" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="designation">Designation</label>
                                        <input type="text" className="form-control" id="designation" name="designation" value={formData.designation} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right"> 
                                    <button type="submit" className="btn btn-outline-primary mt-2 mb-2">Submit</button>
                                </div>
                            </div>
                        </form>
                            </div>
                        </div>
                        
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;
