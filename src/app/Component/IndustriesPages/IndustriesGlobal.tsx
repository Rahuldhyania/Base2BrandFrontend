import React from "react";

const IndustriesGlobal = ({
  title,
  description,
  market_cap,
  base2brand_cap,
  market_cap_des,
  base2brand_cap_des
}) => {
  return (
    <div className="b2b-black-bg py-5">
      <section className="xxl_container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h2
              className="SolutionAccelerator_heading  gradient_text mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p
              className="indusries_haeding_description text-lg text-light mb-5"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="row justify-content-center mt-4">
              <div className="col-md-5 mb-4">
                <div className="industry_stat_card">
                  <h4 className="text-white">Global Market Size</h4>
                  <h3>
                    {market_cap}
                  </h3>
                  <p className="industry_stat_desc">
                    {market_cap_des}
                  </p>
                </div>
              </div>

              <div className="col-md-5 mb-4">
                <div className="industry_stat_card active">
                  <h4 className="text-white">Base2Brand Contribution</h4>
                  <h3>
                    {base2brand_cap}
                  </h3>
                  <p className="industry_stat_desc">
                    {base2brand_cap_des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesGlobal;
