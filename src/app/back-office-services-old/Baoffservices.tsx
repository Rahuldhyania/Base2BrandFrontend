import React from "react";
import Backoffsercard from "./Backoffsercard";
import Image from "next/image";

export default function Baoffservices() {
  return (
    <div
      className="main_baoff_services pt-5 pb-5"
      style={{ background: "#7D9BFF" }}
    >
      <div className="cus_container">
        <div className="text-center">
          <h2 className="b2b-heading text-black baoff_text_ph">
            <span className="text-white handdrawn handdrawn_orange">Pillars of Delivering</span> Our Back{" "}
            <br /> Office Support Services
          </h2>
        </div>

        <div className="position-relative pt-3">
          <div className="pt-4 pb-4">
            <Backoffsercard
              drop_shadow="shadow_right"
              card_title="Quick Responses"
              card_title_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Sketch-annotation.png"
              card_para="Our back office support team delivers fast, accurate, and clear responses to customer queries, reducing delays, boosting satisfaction, and maintaining the trust your brand depends on."
              card_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42931_njxoxc.png"
            />
          </div>
          <div className="pt-4 pb-4">
            <Backoffsercard
              drop_shadow="shadow_left"
              flex_reverse="flex-row-reverse"
              card_title="Team Coordination "
              card_title_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479226_jjytql.webp"
              card_para="We act as the link between customers and internal departments, ensuring every issue is addressed through smooth collaboration and escalated appropriately for quick resolution."
              card_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42932_aq8fo3_1.png"
            />
          </div>
          <div className="pt-4 pb-4">
            <Backoffsercard
              drop_shadow="shadow_right"
              card_title="Service Monitoring "
              card_title_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/star.webp"
              card_para="By tracking essential customer service metrics like response time and resolution rate, we consistently evaluate performance and implement improvements to enhance the overall service quality."
              card_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42934_pstsu3_1_1.png"
            />
          </div>
          <div className="pt-4 pb-4">
            <Backoffsercard
              drop_shadow="shadow_left"
              flex_reverse="flex-row-reverse"
              card_title="Reporting & Insights "
              card_title_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479225_o8kopa.webp"
              card_para="We provide regular, detailed reports that highlight customer trends, performance data, & support activity empowering your business with insights to drive smarter decisions and better customer engagement."
              card_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42933_cp7xnh_1.png"
            />
          </div>
          <div className="pt-4 pb-4">
            <Backoffsercard
              drop_shadow="shadow_right"
              card_title="Knowledge Management "
              card_title_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Sketch-annotation1.png"
              card_para="We maintain an up-to-date internal knowledge base and FAQs to ensure consistent, accurate responses, reduce resolution time, and empower agents with the information they need to serve customers efficiently."
              card_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42935_ngpiov_1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
