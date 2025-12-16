import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Cusnewbanner from "./Cusnewbanner";
import "./customernew.css";
import Cusstand from "./Cusstand";
import Cuschannel from "./Cuschannel";
import Custhriv from "./Custhriv";
import Cusreview from "./Cusreview";
import PageHead from "../../../component/PageHead";
import Callbackcus from "./Callbackcus";
export default function page() {
  const baseURL = "https://base2brand.com/customer-support";
  const wwwURL = "https://www.base2brand.com/customer-support";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Customer Support Services | Base2Brand Infotech",
    description:
      "Reach Base2Brand for expert customer support in India. Quick help with all your service needs.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Cusnewbanner />
      <div style={{ background: "rgb(0, 0, 0)", position: "relative" }}>
        <div
          className="cus_gardient_header"
          style={{
            height: "20%",
            top: "-20%"
          }}
        />
        <div className="pb-5 pt-0 pt-sm-5">
          <div className="container">
            <div className="text-center">
              <h2 className="b2b-partners-heading m-0">
                <p className="m-0">
                  Why Base<span style={{ color: "#F37335" }}>2</span>Brand!
                </p>
              </h2>
              <h2 className="b2b-partners-heading" style={{ color: "#7D9BFF" }}>
                Customer Support Stands Out?
              </h2>
            </div>
            <div className="position-relative">
              <div className="position-sticky pt-3 pb-3 stand_position" data-aos="fade-up">
                <Cusstand
                  s_card_bg="#E4E4E4"
                  s_btn_bg="linear-gradient(90deg, rgba(125,155,255,1) 0%, rgba(176,106,179,1) 100%)"
                  s_btn_count="1"
                  s_para_color="#2C2C2C"
                  s_title_color="#396BDB"
                  s_title="Expertise You Can Trust"
                  s_para="Our support team is composed of skilled professionals with years of experience in ecommerce customer support services. From software issues, inventory management to system integrations, our team offers reliable, effective solutions that meet your specific needs. 'Base2Brand isn’t just fixing problems; we're building long-term solutions'"
                  s_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_25_y3itrl.png"
                />
              </div>
              <div className="position-sticky pt-3 pb-3 stand_position" data-aos="fade-up">
                <Cusstand
                  s_card_bg="linear-gradient(90deg, rgba(125,155,255,1) 0%, rgba(176,106,179,1) 100%)"
                  s_btn_bg="#FFFFFF"
                  s_btn_count="2"
                  s_para_color="#F1F1F1"
                  s_title_color="#FFFFFF"
                  s_title="Available 24/7"
                  s_para="Issues in a website or an online store can arise at any time, and we’re ready to help whenever you need us. Whether it's an urgent matter late at night or on weekends, Base2Brand’s support is always available. 'Our 24/7 support means you’re never left in the dark."
                  s_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_26_mhcafg.png"
                />
              </div>
              <div className="position-sticky pt-3 pb-3 stand_position" data-aos="fade-up">
                <Cusstand
                  s_card_bg="#E4E4E4"
                  s_btn_bg="linear-gradient(90deg, rgba(125,155,255,1) 0%, rgba(176,106,179,1) 100%)"
                  s_btn_count="3"
                  s_para_color="#2C2C2C"
                  s_title_color="#396BDB"
                  s_title="Multichannel Support"
                  s_para="We offer multiple ways for you to reach us: phone, email, live chat, or video calls. Whatever works best for you, we’re here to assist. 'With Base2Brand, getting the support you need is always easy.'"
                  s_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_27_pcsjys.png"
                />
              </div>
              <div className="position-sticky pt-3 pb-3 stand_position" data-aos="fade-up">
                <Cusstand
                  s_card_bg="linear-gradient(90deg, rgba(125,155,255,1) 0%, rgba(176,106,179,1) 100%)"
                  s_btn_bg="#FFFFFF"
                  s_btn_count="4"
                  s_para_color="#F1F1F1"
                  s_title_color="#FFFFFF"
                  s_title="Personalized Solutions"
                  s_para="Every ecommerce business has unique needs. That’s why we tailor our support to fit your specific requirements. We listen, understand your challenges, and provide personalized solutions to ensure your systems function optimally. 'At Base2Brand, we solve problems the way you need them solved.'"
                  s_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_28_lj7b44.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cuschannel />
      <Custhriv />
      <Cusreview />
      <Footer />
    </div>
  );
}
