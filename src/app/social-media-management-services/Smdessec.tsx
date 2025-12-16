
import Image from "next/image";
import React from "react";
export default function Smdessec() {
  return (
    <>
      <div className="des_sec_bg">
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <h2 className="b2b-heading">
              <span className="sm_skyblue"> Captivate Your Audience </span> with
              Creative Social <br /> Media Post Designs
            </h2>
            <p className="m-0 b2b-text">
              In today&apos;s fast-paced digital world, a strong and captivating social
              media presence is essential. Our social media graphic design
              services are tailored to create dynamic and engaging content for
              your audience. Whether it&apos;s an eye-catching post, a compelling
              banner, or a powerful story design, our creative team will deliver
              visuals that resonate with your audience and reflect your brand’s
              unique voice.
            </p>
            <div className="d-flex justify-content-center position-relative pt-4 pb-4">
              <Image
                data-aos="fade-up"
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_oiiwdf.png"
                alt=""
                width={1000}
                height={500}
                className="des_flot_left"
              />
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_9_nkeg0b.png"
                alt=""
                width={1000}
                height={500}
                className="des_aroww"
              />
              <Image
                data-aos="fade-up"
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_1_fjelca.png"
                alt=""
                width={1000}
                height={500}
                className="des_flot_right"
              />
            </div>
            <h2 className="b2b-heading sm_skyblue">Expertise in Every Pixel</h2>
            <p className="m-0 b2b-text">
              As a leading Social Media Design Company, we understand the
              importance of crafting designs that not only look stunning but also
              drive engagement. From social media creative design to optimized
              post designs, we help your brand stand out across all platforms. Our
              team specializes in creating visually compelling content that
              encourages interactions, boosts likes, and garners shares.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
