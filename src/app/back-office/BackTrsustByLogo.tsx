import { memo } from 'react';

interface BackTrsustByLogoProps {
  title?: string;
  subheading?: string;
}

const BackTrsustByLogo = ({ title = "Trusted by", subheading = "leading brands" }: BackTrsustByLogoProps) => {
  const logoTrusted = [
    { id: 1, image: "/back-offce-img/grillfather.png", alt: "Grillfather" },
    { id: 2, image: "/back-offce-img/zppm-auto.png", alt: "ZPPM Auto" },
    { id: 3, image: "/back-offce-img/labax-logo.png", alt: "Labax" },
    { id: 4, image: "/back-offce-img/warleys-logo.png", alt: "Warleys" },
    { id: 5, image: "/back-offce-img/vis-learning.png", alt: "VIS Learning" },
    { id: 6, image: "/back-offce-img/vip-logo.png", alt: "VIP" },
  ];

  return (
    <div className='back-trusted-by-leadibng'>
      <div className='b2b-container-lg images_container_index'>

        <div className="baoff_cus_sup_left_img"></div>
        <div className='baoff_cus_sup_right_img'></div>

        <div className='back-trusted-wr'>
          <div className='left-back-trst' data-aos="fade-up" data-aos-duration="500">
            {logoTrusted.map(({ id, image, alt }) => (
              <div key={id} className='logo-item'>
                <img src={image} alt={alt} />
              </div>
            ))}
          </div>
          <div className='right-back-trs'>
            <h2 data-aos="fade-up" data-aos-duration="500">{title.split(' ').map((word, index) => (
                <span key={index} className={index === 1 ? 'normal' : 'highlight'}> {word}{index < title.split(' ').length - 1 ? ' ' : ''}</span>
             ))}</h2>
            <h3 data-aos="fade-up" data-aos-duration="600">{subheading}</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default memo(BackTrsustByLogo);