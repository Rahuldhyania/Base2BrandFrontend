"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";

export default function Seostep() {
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
      {/* ]Seo steps section  */}
      <div
        className="pt-5 pb-5"
        style={{
          background:
            " linear-gradient(84deg, rgb(34, 24, 83) 5%, rgb(0, 0, 0) 91%)",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="b2b-partners-heading">
              Our SEO Process: A Step-by-Step Approach <br /> to Higher Rankings
            </h2>
          </div>
          <div className="row step_con_main">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480378_zy9br0.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    In-Depth Website Audit
                  </p>
                  <span className="banner_card_p text-white">
                    We begin with a comprehensive audit of your website to
                    identify technical issues, broken links, slow loading
                    speeds, and other factors that may <br /> affect your
                    rankings. This helps us create a clear roadmap for
                    optimization.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480377_1_sfddge.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    Keyword Research & Competitor Analysis
                  </p>
                  <span className="banner_card_p text-white">
                    Our team conducts thorough keyword research to find
                    high-impact search terms that align with your business
                    goals. We also analyze <br /> competitor strategies to
                    identify opportunities that can give your website an edge in
                    search rankings.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480376_i1takw.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    On-Page Optimization
                  </p>
                  <span className="banner_card_p text-white">
                    We optimize meta tags, headings, content, images, and
                    internal links to improve your website’s relevance to search
                    engines. Site structure, <br /> mobile-friendliness, and
                    page speed are also fine-tuned for better performance.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480375_cwzfwj.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    High-Quality Content Creation
                  </p>
                  <span className="banner_card_p text-white">
                    Content is king in SEO. Our experts craft engaging,
                    keyword-optimized content that not only ranks well but also
                    keeps users engaged. We focus on blogs, landing pages, and
                    product descriptions that attract and convert visitors.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480390_1_baaosc.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    Link Building & Off-Page SEO
                  </p>
                  <span className="banner_card_p text-white">
                    We strengthen your website’s authority by acquiring
                    high-quality backlinks from trusted sources. Our off-page
                    SEO strategies include guest <br /> blogging, social media
                    promotion, and business directory submissions to boost
                    credibility.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480374_h6ac6w.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    Technical SEO Enhancements
                  </p>
                  <span className="banner_card_p text-white">
                    Our team ensures that your website follows SEO best
                    practices by improving URL structures, implementing schema
                    markup, and fixing crawl <br /> errors. Secure HTTPS
                    implementation and proper indexing settings further enhance
                    your website’s visibility.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480370_p2wynf.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    Performance Tracking & Reporting
                  </p>
                  <span className="banner_card_p text-white">
                    SEO is an ongoing process. We continuously monitor rankings,
                    website traffic, and user behavior using advanced analytics
                    tools. Clients receive <br /> detailed reports with
                    actionable insights to track progress and refine strategies.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up">
              <div className="step_con">
                <div className="step_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480369_p7ditg.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="step_text">
                  <p className="dev_choose_t1 m-0 pb-2 seo_blue_heading">
                    Continuous Improvement & Adaptation
                  </p>
                  <span className="banner_card_p text-white">
                    Google’s algorithms evolve, and so do we. Our SEO team
                    constantly updates strategies to align with the latest
                    trends, ensuring your brand <br /> maintains a competitive
                    edge and long-term success in search engine rankings.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SEO is necessary section  */}
      <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 seo_necessary_con">
              <div className="text-start" data-aos="fade-up">
                <h2 className="b2b-partners-heading">
                  Why Investing in SEO Is Necessary Nowadays?
                </h2>
                <p className="banner_card_p text-white">
                  With over 93% of online experiences starting with a search
                  engine, businesses that ignore SEO risk losing potential
                  customers to competitors. Around 75% of users never scroll
                  past the first page of Google, making ranking at the top
                  crucial. Investing in SEO ensures long-term visibility, higher
                  traffic, and increased conversions. It helps businesses build
                  credibility, stay ahead of algorithm changes, and adapt to
                  evolving consumer search behaviors.
                </p>
              </div>
              <div className="text-start" data-aos="fade-up">
                <p className="dev_choose_t1" style={{ color: "#ED8F03" }}>
                  Key Reasons to Invest in SEO:
                </p>
                <ul className="seo_ul_li text-white">
                  <li>
                    <span className="seo_ul_li_span">
                      Higher Visibility:
                    </span>{" "}
                    Ranking higher increases brand awareness and organic
                    traffic.
                  </li>
                  <li>
                    <span className="seo_ul_li_span">
                      Cost-Effective Marketing:
                    </span>{" "}
                    SEO delivers long-term results without ongoing ad spend.
                  </li>
                  <li>
                    <span className="seo_ul_li_span">
                      Improved User Experience:
                    </span>{" "}
                    Optimized sites load faster and offer better navigation.
                  </li>
                  <li>
                    <span className="seo_ul_li_span">
                      Competitive Advantage:
                    </span>{" "}
                    Stay ahead of competitors by securing top search positions.
                  </li>
                  <li>
                    <span className="seo_ul_li_span">
                      Local & Global Reach:
                    </span>{" "}
                    SEO targets the right audience, whether local or
                    international.
                  </li>
                </ul>
                <div className="mt-5">
                  <button
                    className="b2b-btn b2b-btn-sm m-0"
                    onClick={toggleModal}
                  >
                    Book Your Audit Today
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="seobanner" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/two-businessman-discussing-business-plan-digital-tablet_wedahp.jpg"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        {showModal && <Request onCloseModal={toggleModal} />}
      </div>
    </div>
  );
}
