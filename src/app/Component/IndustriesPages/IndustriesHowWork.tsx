import React from "react";

const Howworkdata = [
  {
    id: 1,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 2,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 3,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 4,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 5,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  }
];
const IndustriesHowWork = () => {
  return (
    <div className="b2b-black-bg py-md-5">
      <div className="xxl_container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="how_work_left pt-4">
              <h2 className="SolutionAccelerator_heading text-white">
                How <span className="gradient_text"> E-commerce </span> Business
                Works with <span className="gradient_text"> Base2brand?</span>
              </h2>
              <p className="pt-4 b2b-title-text text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur vitae deserunt ratione, quo illo adipisci quas nobis non nesciunt explicabo mollitia provident, veritatis beatae sapiente, officia cupiditate quasi voluptatibus.  
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {Howworkdata.map((data, index) =>
              <div className="how_work_rightcard" key={index}>
                <h2 className="number_heading gradient_text_number">{data.id <9 ? '0'+data.id : data.id}</h2>
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
