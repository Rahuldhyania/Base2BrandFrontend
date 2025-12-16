"use client";

import { Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  features: ServiceFeature[];
  curent_pagename: string;
}

export default function ServicesSection({
  features,
  curent_pagename
}: ServicesSectionProps) {
  return (
    <div className="bg_blue_right">
    <section className="py-5">
      <div className="cus_container max_w_1920">
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="hire_banner_subheading mb-4 text-white">
              Our Core Advertising Services to Drive
              <p className="text_hire_primary">{curent_pagename}</p>
            </h2>
            <p className="b2b-title-text text-white">
              Comprehensive Shopify solutions to power your e-commerce success
            </p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) =>
            <Col md={6} lg={4} key={index} className="mb-4 mt-4">
              <ServiceCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Col>
          )}
        </Row>
      </div>
    </section>
    </div>
  );
}
