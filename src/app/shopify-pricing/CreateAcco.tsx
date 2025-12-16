import React from "react";

const CreateAcco = () => {
  const faqs = [
    {
      id: "one",
      question: "How long will it take to create my Shopify website?",
      answer: "The timeline for creating a Shopify website depends on the complexity of the project and the specific requirements of the client. Typically, we aim to complete projects within 4-6 weeks. However, this timeline may vary based on the scope of the project and the responsiveness of the client."
    },
    {
      id: "two",
      question: "Can I use my own domain name with a Shopify website?",
      answer: "Absolutely! In fact, using your own domain name is often a better choice than using a generic one provided by Shopify. It gives your brand a more professional and recognizable image, and makes it easier for your customers to remember and find your website. We can help you connect your existing domain name to your new Shopify website, or if you don’t have one yet, we can help you purchase and set one up."
    },
    {
      id: "three",
      question: "Do I need any technical skills to manage my Shopify website?",
      answer: "No, Shopify is designed to be user-friendly and easy to manage, even if you have no technical skills. We also provide training to help you get started."
    },
    {
      id: "four",
      question: "Can you help me set up shipping and taxes on my Shopify store?",
      answer: "Yes, we can help you set up shipping and tax rates on your Shopify store. We will work with you to determine the appropriate rates based on your products and location, and configure your store accordingly."
    },
    {
      id: "five",
      question: "How do I know if Shopify is the right platform for my business?",
      answer: "Shopify is a great platform for businesses of all sizes and industries, but it may not be the right fit for everyone. We can work with you to determine if Shopify is the best platform for your business based on your unique needs and goals."
    }
  ];

  return (
    <div className="accordion accordion-flush bg-accodian  rounded" id="accordionFlushExample">
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
              <p className="gk-sub-text-small text-white">
                {answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateAcco;
