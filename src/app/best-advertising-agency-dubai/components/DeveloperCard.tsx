'use client';

import { Card, Badge } from 'react-bootstrap';

interface DeveloperCardProps {
  name: string;
  experience: string;
  specialties: string[];
  image: string;
  rating: number;
}

export default function DeveloperCard({ name, experience, specialties, image, rating }: DeveloperCardProps) {
  return (
    <Card className="text-center shadow-sm border-0 h-100">
      <Card.Body className="p-4">
        <img 
          src={image} 
          alt={name}
          className="rounded-circle mb-3"
          width="120"
          height="120"
          style={{ objectFit: 'cover' }}
        />
        <Card.Title className="h5 mb-2">{name}</Card.Title>
        <p className="text-muted mb-3">{experience} Experience</p>
        <div className="mb-3">
          {specialties.map((specialty, idx) => (
            <Badge bg="primary" className="me-1 mb-1" key={idx}>
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="text-warning mb-3">
          {'★'.repeat(Math.floor(rating))} {rating}
        </div>
      </Card.Body>
    </Card>
  );
}