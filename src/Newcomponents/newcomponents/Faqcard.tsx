import React from "react";

type faqcard = {
  client_company: string;
  client_review: string;
  clinet_name: string;
};
const Faqcard = ({ client_company, client_review, clinet_name }: faqcard) => {
  return (
    <div className="new_faqouter">
      <div className="faq_client_company">
        {client_company}
      </div>
      <p className="client_review m-0 pt-3">
        {client_review}
      </p>

      <p className="text-white new_subtitle m-0 client_name">
        {clinet_name}
      </p>
    </div>
  );
};

export default Faqcard;
