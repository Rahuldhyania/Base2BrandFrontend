'use client';

import { Accordion } from 'react-bootstrap';

interface FAQItemProps {
  eventKey: string;
  question: string;
  answer: string;
}

export default function FAQItem({ eventKey, question, answer }: FAQItemProps) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{question}</Accordion.Header>
      <Accordion.Body>
        {answer}
      </Accordion.Body>
    </Accordion.Item>
  );
}