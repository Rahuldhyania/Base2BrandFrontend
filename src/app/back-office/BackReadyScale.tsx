import Image from 'next/image';
import { memo } from 'react';

interface BackReadyScaleProps {
  title?: string;
  description?: string;
  buttonTitle?: string;
  buttonUrl?: string;
  image?: string;
}

const BackReadyScale = ({ title, description, buttonTitle, buttonUrl, image }: BackReadyScaleProps) => {
  return (
    <div className="back-ready-scale">
      <div className="b2b-container-lg images_container_index">
        <div className="inner-ready-wr">
            <div className="baoff_cus_sup_left_img"></div>
            <div className='baoff_cus_sup_right_img'></div>
          <div className="left">
            {title && (
                <h2 data-aos="fade-up" data-aos-duration="500">
                    {title.split(' ').map((word, index) => (
                    <span
                        key={index}
                        className={index === 2 || index === 3 ? 'highlighttext' : 'normaltext'}>
                        {word}
                        {index < title.split(' ').length - 1 ? ' ' : ''}
                    </span>
                    ))}
                </h2>
                )}
            {description && <p data-aos="fade-up" data-aos-duration="600">{description}</p>}
            {buttonTitle && (
         
                <a href={buttonUrl}>
              <button className='b2b-btn b2b-btn-sm m-0' data-aos="fade-up" data-aos-duration="700">{buttonTitle}</button>
            </a>
            )}
          </div>

          <div className="right-image-ready">
            {image && (
              <Image
                src={image}
                alt={title ?? "Ready to scale"}
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

export default memo(BackReadyScale);