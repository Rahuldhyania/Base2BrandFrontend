import Image from 'next/image';
import { memo } from 'react';

interface TopReasonProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

const TopReason = ({ title, subtitle, image }: TopReasonProps) => {
  const topReasonProperty = [
    {
      id: 1,
      title: "Affordable Pricing",
      description:
        "We offer cost-effective back office support services tailored to your business size and needs. Our pricing ensures you get maximum value without compromising on service quality or efficiency.",
    },
    {
      id: 2,
      title: "High-Quality Services",
      description:
        "Our commitment to delivering accurate, efficient, and professional back office support helps your business run smoothly. We maintain high standards across all operations to ensure consistent service excellence.",
    },
    {
      id: 3,
      title: "Timely and Accurate Reporting",
      description:
        "Stay informed with clear, detailed, and punctual reports. We provide insights on performance, trends, and customer behavior to help you make smart, data-driven decisions at the right time.",
    },
    {
      id: 4,
      title: "Experienced and Dedicated Team",
      description:
        "Our skilled support team brings years of industry experience, deep domain knowledge, and a passion for customer success. We treat your business like our own—with care and dedication.",
    },
    {
      id: 5,
      title: "Excellent Customer Service",
      description:
        "We prioritize your satisfaction through proactive communication, fast responses, and issue resolution. Our team goes the extra mile to ensure a smooth, stress-free experience for both you and your customers.",
    },
    {
      id: 6,
      title: "Flexible and Scalable Solutions",
      description:
        "Our back office support services are designed to grow with your business. Whether you're scaling up or pivoting, we adapt quickly to meet your evolving needs without disrupting your workflow.",
    },
  ];

  return (
    <div className="main-top-reason">
      <div className="b2b-container-lg">
        <div className="top-inner">

          {/* Left: heading + image */}
          <div className="left-content">

            {/* Show ct block only if title or subtitle exists */}
            {(title || subtitle) && (
              <div className="ct">
                {title && <h2 data-aos="fade-up" data-aos-duration="500">{title}</h2>}
                {subtitle && <h3 data-aos="fade-up" data-aos-duration="600">{subtitle}</h3>}
              </div>
            )}

            {/* Show image only if image prop exists */}
            {image && (
              <div className="image-ch" data-aos="fade-up" data-aos-duration="600">
                <Image
                  src={image}
                  alt={subtitle ?? "Top Reason Image"}
                  width={600}
                  height={500}
                  priority
                  quality={75}
                />
              </div>
            )}

          </div>

          {/* Right: reason cards */}
          <div className="right-content">
            {topReasonProperty.map((reason ,index) => (
              <div key={reason.id} className="inner-top-items" data-aos="fade-up" data-aos-duration="500" data-aos-delay={`${index * 100}`}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(TopReason);