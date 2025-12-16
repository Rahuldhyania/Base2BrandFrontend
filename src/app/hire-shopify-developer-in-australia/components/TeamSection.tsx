'use client';

import { Container, Row, Col } from 'react-bootstrap';
import DeveloperCard from './DeveloperCard';

interface Developer {
  name: string;
  experience: string;
  specialties: string[];
  image: string;
  rating: number;
}

interface TeamSectionProps {
  developers: Developer[];
}

export default function TeamSection({ developers }: TeamSectionProps) {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Meet Our Expert Developers</h2>
            <p className="lead text-muted">
              Skilled professionals dedicated to delivering exceptional Shopify solutions
            </p>
          </Col>
        </Row>
        <Row>
          {developers.map((developer, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <DeveloperCard 
                name={developer.name}
                experience={developer.experience}
                specialties={developer.specialties}
                image={developer.image}
                rating={developer.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}