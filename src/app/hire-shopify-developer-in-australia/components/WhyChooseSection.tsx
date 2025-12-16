"use client";

import { Container, Row, Col } from "react-bootstrap";

interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseSectionProps {
  items?: any;
  image?: string;
}



const WhyChooseSection = ({
  items,
  image = "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/pexels-photo-3184291.jpg"
}: WhyChooseSectionProps) => {
  return (
    <div className="bg_blue_left">
      <section className="py-5">
        <div className="cus_container max_w_1920">
          <Row>
            <Col lg={6}>
              <h2 className="hire_banner_subheading mb-4 text-white">
                Why Choose Our Advertising Experts?
              </h2>
              {items.map((item, index) =>
                <div className="mb-4" key={index}>
                  <h4 className="b2b-partners-heading text_hire_green mb-2">
                    {item.icon} {item.title}
                  </h4>
                  <p className="b2b-text text-white pe-md-5">
                    {item.description}
                  </p>
                </div>
              )}
            </Col>
            <Col lg={6} className="d-flex mt-4 mt-md-0">
              <img
                src={image}
                alt="Professional Development Team"
                className="img-fluid rounded shadow hire_aus_side_banner"
              />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseSection;