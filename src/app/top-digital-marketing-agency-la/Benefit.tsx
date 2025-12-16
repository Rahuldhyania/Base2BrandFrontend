import React from "react";
import Topbenefit from "./Topbenefit";

type benefit = {
  benefit_title: string;
  benefit_desc: string;
  benefitdata: any;
};
const Benefit = ({ benefit_title, benefit_desc, benefitdata }: benefit) => {
  return (
    <div className="cus_container max_w_1920 pt-1 pt-lg-5 py-5">
      <div className="text-center">
        <h2
          className="hire_banner_subheading text-black"
          dangerouslySetInnerHTML={{ __html: benefit_title }}
        />
        <p className="b2b-title-text text-black">
          {benefit_desc}
        </p>
      </div>
      <div className="row">
        {benefitdata.map((data, index) =>
          <div className="col-12 col-md-6 col-xl-4 h-full" key={index}>
            <Topbenefit
              benefiticon={data.logo}
              benefitheading={data.benefitcard_title}
              benefittext={data.benefit_desc}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Benefit;
