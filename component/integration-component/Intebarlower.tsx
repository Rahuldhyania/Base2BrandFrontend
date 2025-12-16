import React from "react";
type Intebarlower = {
  bartitlelower: string;
  barparalower: string;
};
const Intebarlower = ({ bartitlelower, barparalower }: Intebarlower) => {
  return (
    <div>
      <div className="custom_bar d-flex flex-column align-items-center pt-4 pb-5">
        <h3 className="inte-sub-heading pt-2 ani_faq_h3 text-white">
          {bartitlelower}
        </h3>
        <p className="sub_text text-center text-white m-0 inte_dis_cus_p">
          {barparalower}
        </p>
      </div>
      {/* <div className="lower_bar">
        <h1 className="text-white text-center">Customer Reviews</h1>
      </div> */}
    </div>
  );
};

export default Intebarlower;
