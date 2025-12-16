"use client";

import RequestForm from "@/app/request-form";
import { useState } from "react";
// import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
// import Request from "../..request-form";
interface HeroSectionProps {
  title: string;
  description: string;
  heroImage: string;
  stats: {
    projects: string;
    rating: string;
    support: string;
  };
}

export default function HeroSection({
  title,
  description,
  heroImage,
  stats
}: HeroSectionProps) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(() => {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  };
  return (
    <section className="hero-section bg_blue_right text-white py-md-5">
      <div className="cus_container max_w_1920 py-5">
        <Row className="align-items-center min-vh-75">
          <Col lg={6}>
            <h1
              className="hire_banner_heading mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="lead mb-4">
              {description}
            </p>
            <div className="d-flex gap-3 mb-4">
              <div className="mt-4">
                <button
                  onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm m-0"
                >
                  Request a Quote
                </button>
              </div>
              {/* <Button variant="outline-light" size="lg" className="px-4">
                View Portfolio
              </Button> */}
            </div>
            <div className="d-flex align-items-center gap-4 pt-3">
              <div className="text-center">
                <div className="hire_count text_hire_green fw-semibold">
                  {stats.projects}
                </div>
                <small className="b2b-title-text">successful campaigns</small>
              </div>
              <div className="text-center">
                <div className="hire_count text_hire_green fw-semibold">
                  {stats.rating}
                </div>
                <small className="b2b-title-text">client rating across industries</small>
              </div>
              <div className="text-center">
                <div className="hire_count text_hire_green fw-semibold">
                  {stats.support}
                </div>
                <small className="b2b-title-text">support for your business</small>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-md-0">
            <img
              src={heroImage}
              alt="Shopify Development Team"
              className="img-fluid rounded shadow-lg hire_aus_banner"
            />
          </Col>
        </Row>
        {showModal && <RequestForm onCloseModal={toggleModal} />}
      </div>
    </section>
  );
}
