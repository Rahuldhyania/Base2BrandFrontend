import React from "react";

export default function Aibar() {
  return (
    <div style={{
      background:
          "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
    }} className="pt-5 pb-5">
      <div className="container">
        <div className="text-center ">
          <h2 className="b2b-partners-heading text-white" data-aos="fade-up">
          Ready to integrate AI into your business? 
          </h2>
          <p className="text-white  m-0" data-aos="fade-up">
          With AI-driven tools, businesses can automate tasks, gain valuable insights, and stay competitive, leading to increased efficiency, growth, <br /> and innovation in the digital age. Contact us today to explore tailored AI solutions that drive success!

          </p>
        </div>
        <div className="d-flex justify-content-center pt-4">
          <button className="b2b-btn b2b-btn-sm m-0" data-aos="fade-up">Consultation Now</button>
        </div>
      </div>
    </div>
  );
}
