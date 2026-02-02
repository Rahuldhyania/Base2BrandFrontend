import React from "react";

const IndustriesHowWork = ({ title, description, maindata }) => {
  return (
    <div className="b2b-black-bg py-md-5">
      <div className="xxl_container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="how_work_left pt-4">
              <h2
                className="SolutionAccelerator_heading text-white"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="pt-2 pt-lg-4 b2b-title-text text-white">
                {description}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {maindata.map((data, index) =>
              <div className="how_work_rightcard" key={index}>
                <h2 className="number_heading gradient_text_number">
                  {data.id < 9 ? "0" + data.id : data.id}
                </h2>
                <h3 className="text-white how_work_rightcard_heading">
                  {data.title}
                </h3>
                <p className="text-lg text-white">
                  {data.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHowWork;
