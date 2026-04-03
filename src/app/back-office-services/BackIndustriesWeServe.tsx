import Image from 'next/image';
import { memo } from 'react';

interface BackIndustriesWeServeProps {
  title?: string;
  image?: string;
}

const BackIndustriesWeServe = ({ title, image }: BackIndustriesWeServeProps) => {
  const weSkill = [
    { id: 1,  title: "eCommerce" },
    { id: 2,  title: "Real Estate" },
    { id: 3,  title: "Logistics Hotels" },
    { id: 4,  title: "Telecom" },
    { id: 5,  title: "Restaurants" },
    { id: 6,  title: "Wellness Studios" },
    { id: 7,  title: "Car Rentals" },
    { id: 8,  title: "Online Learning" },
    { id: 9,  title: "Healthcare" },
    { id: 10, title: "Movers & Packers" },
    { id: 11, title: "Accounting" },
    { id: 12, title: "Professional Services" },
    { id: 13, title: "Event Management" },
    { id: 14, title: "Salons & More" },
    { id: 15, title: "Hospitality" },
  ];

  return (
    <div className="back-industries-we-serve">
      <div className="b2b-container-lg images_container_index">
        <div className="inner">
          <div className="left-we">
            {title && <h2 data-aos="fade-up" data-aos-duration="500">{title.split(' ').map((word, index)=>(
                <span
                    key={index}
                    className={index === 0 ? 'highlighttext' : 'normaltext'}>
                        {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                </span>
            ))}</h2>}

            <div className="baoff_cus_sup_left_img"></div>
            <div className='baoff_cus_sup_right_img'></div>

            
            <div className="back-serve-skill">
              {weSkill.map((item,index) => (
                <h4 key={item.id} className="skill-item"  data-aos="fade-up" data-aos-duration="500" data-aos-delay={`${index * 100}`}>
                  {item.title}
                </h4>
              ))}
            </div>
          </div>

          <div className="right-we-image"  data-aos="fade-up" data-aos-duration="500">
            {image && (
              <Image
                src={image}
                alt="Industries We Serve"
                width={600}
                height={500}
                priority
                quality={75}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BackIndustriesWeServe);