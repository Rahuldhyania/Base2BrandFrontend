"use client"
import Image from 'next/image'
import React from 'react'
type banner_card = {
  card_img: string
  card_title: string
  card_para: string
}
const Bannercard = ({ card_img, card_title, card_para }: banner_card) => {
  return (
    <div className='banner_card_container' data-aos="fade-up">
      <div className="banner_card">
        <div className="banner_card_img">
          <Image src={card_img} className='seo_card_img' alt='' width={1000} height={500} />
        </div>
        <p className="dev_choose_t1 m-0" style={{
          color: "#ED8F03"
        }}>
          {card_title}
        </p>
        <span className="banner_card_p m-0 text-white">
          {card_para}
        </span>
      </div>
    </div>
  )
}

export default Bannercard
