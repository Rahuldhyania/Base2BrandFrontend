import Image from "next/image";
import { memo } from "react";

const BackOfficeAbout = ({ title, subtitle, description, image }) => {
    return (
        <div className="back-office-about">
            <div className="b2b-container-lg">
                <div className="wraper">
                    <div className="image-right-cmt" data-aos="fade-up" data-aos-duration="500" >
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            priority
                            quality={75}
                            height={400}
                        />
                    </div>
                    <div className="content">
                        <h2 data-aos="fade-up" data-aos-duration="500">  {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={index === 1 ? 'normal' : 'highlight'}>
                                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}</h2>
                        <h3 data-aos="fade-up" data-aos-duration="600">{subtitle}</h3>
                        <p data-aos="fade-up" data-aos-duration="700">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(BackOfficeAbout);