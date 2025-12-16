import React from "react";
import Image from "next/image";
import clientmeatting from "../../../public/img/digitai-markating-packags/client-meatting.png";
import seoproject from "../../../public/img/digitai-markating-packags/seo-project.png";
import boostwebsite from "../../../public/img/digitai-markating-packags/boost-your-website.png";
import seoprojectmobile from "../../../public/img/digitai-markating-packags/seo-project-mobile.png";

const Servingservice = () => {
  return (
    <>
      <section className="b2b-gray-bg-gk b2b-brands-wrap ">
        <div className="b2b-container-lg">
          <h3 className="gk-heading-bold text-center  text-cente  m-0 ">
            {/* HOW Base
                        <span style={{color:"#EF6B19"}}>
                        2
                        </span>
                        Brand DO IT? */}
            How Our Digital Marketing Services Work?
          </h3>

          <div className=" text-white py-5">
            <div className="row g-4">
              {/* Consultation */}
              <div className="col-md-4">
                <div className=" text-white h-100">
                  <Image src={clientmeatting} alt="" />
                  <div className="card-body">
                    <h5 className="text-white mt-lg-2 mt-3 gk-text-bold">
                      Tailored Strategy Development
                    </h5>
                    <ul className="card-text list-unstyled">
                      <li className=" b2b-sub-text my-2">
                        • Analyze your business goals, target audience, and competitors.

                      </li>
                      <li className=" b2b-sub-text my-2">
                        • Craft personalized digital marketing strategies to align with your specific needs.

                      </li>
                      <li className=" b2b-sub-text my-2">
                        • Prioritize the most effective marketing channels for maximum impact.

                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Optimization */}
              <div className="col-md-4">
                <div className=" text-white h-100 d-flex flex-md-column flex-column-reverse">
                  <div className="card-body">
                    <h5 className="text-white mt-lg-2 mb-lg-3 mt-3 gk-text-bold">
                    Execution and Optimization
                    </h5>
                    <ul className="card-text list-unstyled">
                      <li className=" b2b-sub-text my-2">
                        • Implement campaigns across SEO, PPC, social media, and more.

                      </li>
                      <li className=" b2b-sub-text my-2">
                        • Continuously monitor and analyze campaign performance.

                      </li>
                      <li className=" b2b-sub-text my-2">
                        • Adjust strategies in real-time to improve results and ROI.

                      </li>
                    </ul>
                  </div>
                  <Image
                    className="d-none d-md-block"
                    src={seoproject}
                    alt=""
                  />
                  <Image className="d-sm-none" src={seoprojectmobile} alt="" />
                </div>
              </div>

              {/* Launch Campaigns */}
              <div className="col-md-4">
                <div className=" text-white h-100">
                  <Image src={boostwebsite} alt="" />
                  <div className="card-body">
                    <h5 className="text-white mt-lg-2 mt-3 gk-text-bold">
                    Transparent Reporting and Support

                    </h5>
                    <ul className="card-text list-unstyled">
                      <li className=" b2b-sub-text my-2">
                        • Provide detailed reports on campaign performance and progress.

                      </li>
                      <li className=" b2b-sub-text my-2">
                        • Offer clear insights into metrics like traffic, conversions, and engagement.

                      </li>
                      <li className=" b2b-sub-text my-2">
                        • Maintain open communication and ongoing support to ensure client satisfaction.

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex pt-3 pt-md-5 d-flex justify-content-center align-items-center  ">
            <button className="gk-b2b-btn b2b-btn-sm mt-3 m-0">
                  <a
                    href="https://wa.me/+918360116967?text=Hello%20there!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Let’s Talk
                  </a>
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servingservice;
