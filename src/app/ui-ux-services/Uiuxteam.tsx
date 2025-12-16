"use client";
import Image from "next/image";
import React from "react";

export default function Uiuxteam() {
  const uiteamdata = [
    {
      id: 1,
      teamMimg:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42934_1_wzqvg3.png",
      teamMname: "Sahil Solanki",
      teamMdegi: "UI/UX & Graphic Design  Expert"
    },
    {
      id: 2,
      teamMimg:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42934_2_rhyf3y.png",
      teamMname: "Aman",
      teamMdegi: "UI/UX & Graphic Design Expert"
    },
    {
      id: 3,
      teamMimg:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42936_uyt0wv.png",
      teamMname: "Abhishek ",
      teamMdegi: "Graphic Design Expert"
    },
    {
      id: 4,
      teamMimg:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42938_c0bhde.png",
      teamMname: "Rishabh Dixit",
      teamMdegi: "Video & Motion Graphic Expert"
    }
  ];
  return (
    <div className="bg_blue_right">
      <div className="cus_container_con pt-5 pb-5">
        <h2 className="cool_subheading_text2 text-white text-center ux_team_text_ph" data-aos="fade-up" data-aos-duration="1000">
          Meet Our <span className="ui_skyblue">
            {" "}UI/UX & Graphic <br /> Design{" "}
          </span>{" "}
          Expert
          <span>
            <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_1_qjh3vc_1.svg" alt="" width={1000} height={500} style={{ width: "35px", marginLeft: "15px" }} />
          </span>
        </h2>
        <div className="uiux_team_section pt-5">
          <div className="row justify-content-center">
            {uiteamdata.map(data =>
              <div className="col-12 col-lg-6 col-xl-3 mt-4 static_ph" key={data.id}>
                <div className="ui_teamprofile_con" data-aos="fade-up" data-aos-duration="1000">
                  <div className="ui_teamprofile_bg">
                    <Image
                      src={data.teamMimg}
                      alt={data.teamMname}
                      width={1000}
                      height={500}
                    />
                    <div className="uiteam_profile_text">
                      <h5 className="grow_faq_title ui_blue_text">
                        {data.teamMname}
                      </h5>
                      <p className="b2b-text mt-2">
                        {data.teamMdegi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <div className="row justify-content-center position-relative">
            <span className="teamimg_floting teamimg_floting_left">
              <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_b9ofsn.png" alt="" width={1000} height={500} />
            </span>
            {uiteamdata.slice(2, uiteamdata.length).map(data =>
              <div className="col-12 col-lg-3 mt-3 static_ph" key={data.id}>
                <div className="ui_teamprofile_con" data-aos="fade-up" data-aos-duration="1000" >
                  <div className="ui_teamprofile_bg">
                    <Image
                      src={data.teamMimg}
                      alt={data.teamMname}
                      width={1000}
                      height={500}
                    />
                    <div className="uiteam_profile_text">
                      <h5 className="grow_faq_title ui_blue_text">
                        {data.teamMname}
                      </h5>
                      <p className="b2b-text mt-2">
                        {data.teamMdegi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <span className="teamimg_floting teamimg_floting_right">
              <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_74_o7v2tx.png" alt="" width={1000} height={500} />
            </span>
          </div> */}
        </div>
      </div>

    </div>
  );
}
