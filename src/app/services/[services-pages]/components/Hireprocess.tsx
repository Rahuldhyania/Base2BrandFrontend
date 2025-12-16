import React from "react";

type hireprocess = {
  hireprocessdata: any;
  hireprocesstitle: string;
};

export default function Hireprocess({
  hireprocessdata,
  hireprocesstitle
}: hireprocess) {
  return (
    <div className="bg_blue_left">
      <div className="max_w_1920 cus_container py-5">
        <div className="text-center">
          <h2
            className="hire_banner_subheading text-white"
            dangerouslySetInnerHTML={{ __html: hireprocesstitle }}
          />
        </div>
        <div className="cus_conatiner_con pt-4 hire_dubai_process_outer">
          <div className="hire_process_wrap">
            <p className="hire_process_dubai b2b-title-text">1</p>
            <p className="hire_process_dubai b2b-title-text">2</p>
            <p className="hire_process_dubai b2b-title-text">3</p>
            <p className="hire_process_dubai b2b-title-text">4</p>
            <p className="hire_dubai_hr">
              <span />
            </p>
          </div>
          <div className="hire_procss_card_dubai pt-5">
            {hireprocessdata.map((data, index) =>
              <div className="process_card_outer" key={index}>
                <h2 className="b2b-partners-heading text_hire_green">
                  {data.process_title ? data.process_title : data.title}
                </h2>
                <p
                  className="b2b-text"
                  dangerouslySetInnerHTML={{
                    __html: data.process_description
                      ? data.process_description
                      : data.description
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
