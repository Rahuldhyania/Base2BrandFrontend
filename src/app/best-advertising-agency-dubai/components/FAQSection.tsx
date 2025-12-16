'use client';

import { Container, Row, Col, Accordion } from 'react-bootstrap';
import FAQItem from './FAQItem';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    question: "How much does it cost to hire a Shopify developer in Australia?",
    answer: "The cost varies depending on project complexity, timeline, and requirements. Basic store setups start from $2,000, while custom developments can range from $5,000-$25,000+. We provide detailed quotes after understanding your specific needs."
  },
  {
    question: "How long does it take to develop a Shopify store?",
    answer: "Timeline depends on project scope. Simple store setups take 1-2 weeks, custom theme development takes 3-4 weeks, and complex custom stores with integrations can take 6-12 weeks. We provide accurate timelines during project planning."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer comprehensive support packages including updates, maintenance, bug fixes, and feature enhancements. Our support plans range from basic maintenance to full-service management of your Shopify store."
  },
  {
    question: "Can you migrate my existing store to Shopify?",
    answer: "Absolutely! We specialize in migrating stores from platforms like WooCommerce, Magento, BigCommerce, and others to Shopify. We ensure data integrity, SEO preservation, and minimal downtime during the migration process."
  }
];

export default function FAQSection({ faqs = defaultFAQs }: FAQSectionProps) {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="display-6 fw-bold text-center mb-5">Frequently Asked Questions</h2>
            <Accordion>
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  eventKey={index.toString()}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}