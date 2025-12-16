'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';

interface CTASectionProps {
  title?: string;
  description?: string;
  phoneNumber?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function CTASection({
  title = "Ready to Start Your Shopify Project?",
  description = "Get a free consultation and detailed quote for your Shopify development needs. Let's discuss how we can help grow your e-commerce business.",
  phoneNumber = "1300 XXX XXX",
  primaryButtonText = "Call Now",
  secondaryButtonText = "Get Free Quote"
}: CTASectionProps) {
  return (
    <section className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-6 fw-bold mb-4">{title}</h2>
            <p className="lead mb-4">
              {description}
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button variant="light" size="lg" className="px-4">
                📞 {primaryButtonText}: {phoneNumber}
              </Button>
              <Button variant="outline-light" size="lg" className="px-4">
                📧 {secondaryButtonText}
              </Button>
            </div>
            <div className="mt-4">
              <small>💬 Or chat with us live - we&apos;re online now!</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}