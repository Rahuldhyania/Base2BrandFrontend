import React from "react";

const AccordionText = () => {
  const faqs = [
    {
      id: "one",
      question:
        "What services are included in your digital marketing packages?",
      answer:
        "Our digital marketing packages typically include SEO, content marketing, paid advertising, social media management, and analytics. Each package is customized to meet your business needs and goals, ensuring a comprehensive approach to enhance your online presence.",
    },
    {
      id: "two",
      question: " How do you measure the success of digital marketing campaigns?",
      answer:
        "We measure success through detailed analytics and reporting, tracking key performance indicators such as website traffic, conversion rates, and ROI. These insights help us assess the effectiveness of campaigns and make data-driven adjustments for continuous improvement.",
    },
    {
      id: "three",
      question: " Can you customize a digital marketing package for my business?",
      answer:
        "Yes, we offer customized digital marketing packages tailored to your specific business needs and objectives. We work with you to understand your goals and design a package that addresses your unique challenges and opportunities.",
    },
    {
      id: "four",
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeframe to see results can vary depending on the scope of the campaign and the strategies implemented. Generally, noticeable improvements in visibility and engagement can be seen within a few months, with ongoing optimization leading to sustained growth.",
    },
    {
      id: "five",
      question:
        " What sets your digital marketing services apart from others?",
      answer:
        "Our services stand out due to our personalized approach, industry expertise, and commitment to data-driven strategies. We focus on delivering measurable results, providing transparent reporting, and continuously optimizing campaigns to ensure maximum effectiveness and return on investment.",
    },
  ];

  return (
    <div
      className="accordion accordion-flush bg-accodian  rounded"
      id="accordionFlushExample"
    >
      {faqs.map(({ id, question, answer }) => (
        <div className="accordion-item para" key={id}>
          <h2 className="accordion-header" id={`flush-heading${id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${id}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${id}`}
            >
              <h4 className="text-black gk-acco-text text-white">{question}</h4>
            </button>
          </h2>
          <div
            id={`flush-collapse${id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`flush-heading${id}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small text-white">{answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionText;
