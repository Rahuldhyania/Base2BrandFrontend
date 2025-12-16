'use client';

import { Card } from 'react-bootstrap';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="h-100  hover-card hire_aus_sercard">
      <Card.Body className="text-center p-4">
        <div className="fs-1 mb-3">{icon}</div>
        <Card.Title className="h5 mb-3 b2b-partners-heading text-white fw-semibold">{title}</Card.Title>
        <p className="text-white px-4 b2b-text">
          {description}
        </p>
      </Card.Body>
    </Card>
  );
}