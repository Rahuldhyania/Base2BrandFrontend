
import Image from "next/image";
import React from "react";

export default function Aiservices() {
  return (
    <div
      className="pt-5 pb-5"
      style={{
        background: "#B6CCFF"
      }}
    >
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading text-black m-0" data-aos="fade-up">
            Our AI Services
          </h2>
        </div>
        <div className="row justify-content-center pt-2 ai_services">
          <div className="col-md-6 col-xl-4 mt-4">
            <div className="tcard2" data-aos="fade-up">
              <div className="tcard_inner ai_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/redprogress.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span className="dev_choose_t1  pt-3 pb-2">
                    AI-Powered Automation
                  </span>
                  <span className="dev_choose_p text-black">
                    Automation is key to optimizing business processes. Our AI
                    services include advanced robotic process automation (RPA)
                    and machine learning algorithms that automate repetitive
                    tasks, reduce human errors, and improve efficiency.
                    Companies that invest in automation see a 30% reduction in
                    operational costs.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mt-4">
            <div className="tcard2" data-aos="fade-up">
              <div className="tcard_inner ai_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/purplesearch.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span className="dev_choose_t1  pt-3 pb-2">
                    Predictive Analytics & Data Intelligence
                  </span>
                  <span className="dev_choose_p text-black">
                    Data is the backbone of intelligent decision-making. Our artificial intelligence consultancy provides AI-powered data analytics that enables businesses to make informed decisions based on real-time insights. Studies show that businesses utilizing AI for predictive analytics witness a 40% improvement in customer engagement and operational efficiency.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mt-4">
            <div className="tcard2" data-aos="fade-up">
              <div className="tcard_inner ai_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/yellowmind.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span className="dev_choose_t1  pt-3 pb-2">
                    AI-Driven Customer Experience
                  </span>
                  <span className="dev_choose_p text-black">
                    Customer expectations are evolving, and AI solutions for business are enhancing customer interactions. AI chatbots, voice assistants, and recommendation engines personalize user experiences, increasing engagement and satisfaction.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mt-4">
            <div className="tcard2" data-aos="fade-up">
              <div className="tcard_inner ai_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/processinface.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span className="dev_choose_t1  pt-3 pb-2">
                    Natural Language Processing (NLP) & Machine Learning
                  </span>
                  <span className="dev_choose_p text-black">
                    Understanding customer sentiment and behavior is crucial for business success. Our consulting in artificial intelligence includes NLP-based solutions that analyze customer feedback, automate support, and extract valuable insights. Businesses that integrate NLP into their operations see a 25% increase in customer satisfaction.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mt-4">
            <div className="tcard2" data-aos="fade-up">
              <div className="tcard_inner ai_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/redprogress.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span className="dev_choose_t1  pt-3 pb-2">
                    AI-Powered Automation
                  </span>
                  <span className="dev_choose_p text-black">
                    Automation is key to optimizing business processes. Our AI
                    services include advanced robotic process automation (RPA)
                    and machine learning algorithms that automate repetitive
                    tasks, reduce human errors, and improve efficiency.
                    Companies that invest in automation see a 30% reduction in
                    operational costs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
