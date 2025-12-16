"use client";
import { useState } from 'react';

type FAQ = {
    faqData:any;
}

const Hirefaq = ({ faqData }: FAQ) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg_blue_left'>
            <div className='cus_container max_w_1920 pt-3 pt-md-5 pb-5'>
                <div className="text-center pb-4">
                    <h2 className='hire_banner_subheading text_hire_green'>
                        FAQ&apos;s
                    </h2>
                </div>
                <div className="wrapper">

   
                    {faqData.map((faq, index) => (
                        <div key={index} className="container_faq">
                            <div
                                className={`question text-white ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAnswer(index)}
                            >
                                {faq.question}
                            </div>
                            <div
                                className="answercont"
                                style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
                            >
                                <div className="answer b2b-text text-white">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hirefaq;
