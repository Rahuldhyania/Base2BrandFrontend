import React from "react";

const QualityLeads = () => {
  return (
    <>
      <section className="b2b-gray-bg-gk b2b-brands-wrap  ">
        <div className="b2b-container-lg">
          <h3 className="gk-heading-bold text-center m-auto gk-width-lg pt-3 pb-3">
            Impact of Our Digital Marketing Plans On Your Business
          </h3>
          {/* <p className=" b2b-sub-text text-center pt-3 pb-3">
            We offer a complete range of services to boost your business.
            Usually, these online marketing packages include vital services such
            as SEO, content marketing, and paid advertising. Here are the main
            components of our digital marketing price packages.
          </p> */}

          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-6 col-sm-6 mb-4 col-lg-3">
              <div className="bg-white text-dark p-4 h-100 rounded">
                <h4 className="gk-b2b-bold  text-center">
                  Increased Online Visibility
                </h4>
                <p className="b2b-sub-text text-center text-black">
                  Our digital marketing plan boosts your online visibility by
                  enhancing SEO and utilizing targeted advertising. This results
                  in higher search engine rankings and increased traffic,
                  drawing more potential customers to your website and improving
                  brand recognition.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-sm-6 mb-4 col-lg-3">
              <div
                className="bg-gradient text-white p-4 h-100 rounded"
                style={{
                  background:
                    "linear-gradient(to right, #7411E1, #396BDB) !important",
                }}
              >
                <h4 className="gk-b2b-bold  text-center">
                  Enhanced Engagement and Brand Loyalty
                </h4>
                <p className="b2b-sub-text text-center">
                  2. Enhanced Engagement and Brand Loyalty Through effective
                  content marketing and social media management, our plan drives
                  higher audience engagement and builds brand loyalty. Engaging
                  content and active social media presence foster positive
                  interactions and long-term relationships with your customers,
                  strengthening brand trust.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-sm-6 mb-4 col-lg-3">
              <div className="bg-white text-dark p-4 h-100 rounded">
                <h4 className="gk-b2b-bold  text-center">
                  {" "}
                  Improved Conversion Rates
                </h4>
                <p className="b2b-sub-text text-center text-black">
                  We focus on Conversion Rate Optimization (CRO) to turn website
                  visitors into customers. By refining user experience and
                  optimizing design elements, our plan increases conversion
                  rates, maximizing your return on investment and improving
                  overall sales performance.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 col-sm-6 mb-4 col-lg-3">
              <div
                className="bg-gradient text-white p-4 h-100 rounded"
                style={{
                  background:
                    "linear-gradient(to right, #7411E1, #396BDB) !important",
                }}
              >
                <h4 className="fgk-b2b-bold  text-center">
                  Data-Driven Insights and Continuous Improvement
                </h4>
                <p className="b2b-sub-text text-center ">
                  Our detailed analytics and reporting provide insights into
                  campaign performance. By tracking key metrics, we continuously
                  refine and optimize strategies, ensuring ongoing improvements
                  and effective achievement of your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityLeads;
