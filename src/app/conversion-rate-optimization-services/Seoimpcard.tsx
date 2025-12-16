import React from "react";
type seoimp_card = {
  impcardtitle: string;
  impcardpara: string;
};
const Seoimpcard = ({ impcardtitle, impcardpara }: seoimp_card) => {
  return (
    <div className="pt-2 pb-2" data-aos="fade-up">
      <p className="mid_bar_color_text dev_choose_t1 m-0">
        {impcardtitle}
      </p>
      <span className="banner_card_p text-white">
        {impcardpara}
      </span>
    </div>
  );
};

export default Seoimpcard;
