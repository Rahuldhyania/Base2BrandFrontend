import Image from 'next/image';
import { memo } from 'react';

interface WhoWeAreProps {
  image: string;
  title: string;
  subheading: string;
  description: string;
  buttonTitle: string;
  buttonUrl: string;
  flexDirection?: boolean;
}

const WhoWeAre = ({ image, title, subheading, description, buttonTitle, buttonUrl, flexDirection }: WhoWeAreProps) => {
  return (
    <div className='back-who-we-are'>
        <div className='b2b-container-lg'>
        <div
            className='back-who-we-wr'
            style={{ flexDirection: flexDirection ? 'row-reverse' : 'row' }}>
        
            <div className='content'>
            <h2 data-aos="fade-up"  data-aos-duration="500">{title}</h2>
            <h3 data-aos="fade-up"  data-aos-duration="600">{subheading}</h3>
            <p data-aos="fade-up"  data-aos-duration="600">{description}</p>
             <a href={buttonUrl}>
              <button data-aos="fade-up"  data-aos-duration="700" className='b2b-btn b2b-btn-sm m-0'>{buttonTitle}</button>
            </a>
            
            </div>

            
            <div className='image' data-aos="fade-up"  data-aos-duration="500">
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
            />
            </div>

        </div>
        </div>
    </div>
  );
};

export default memo(WhoWeAre);