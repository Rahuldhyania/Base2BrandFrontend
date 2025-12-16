import React from "react";
type Intebar = {
  bartitle1: string;
  barpara: string;
  colorbartitle: string;
  bartitle2: string;
};
const Intebar = ({ bartitle1, barpara, colorbartitle, bartitle2 }: Intebar) => {
  return (
    <div className="custom_bar d-flex flex-column align-items-center pt-4 pb-5">
      <div className="container d-flex flex-column align-items-center">
        <h3 className="inte-sub-heading pt-2 ani_faq_h3 text-white m-0">
          {bartitle1}
          <span className="colorbartitle">
            {colorbartitle}
          </span>
          {bartitle2}
        </h3>
        <p className="sub_text text-center pt-3 text-white m-0 inte_dis_cus_p">
          {barpara}
        </p>
      </div>
    </div>
  );
};

export default Intebar;
