"use client"
import Image from 'next/image'
import React from 'react'
type offer_card = {
  offer_img: string
  offer_title: string
  offer_para: string
}
const Seooffercard = ({ offer_img, offer_title, offer_para }: offer_card) => {
  return (
    <div className='offer_card_container' data-aos="fade-up">
      <div className="offer_card">
        <div className="offer_card_img">
          <Image src={offer_img} alt='' width={1000} height={500} />
        </div>
        <div className="offer_card_text">
          <p className='dev_choose_t1 pt-3 pb-1 m-0' style={{ color: "#ED8F03" }}>{offer_title}</p>
          <span className='banner_card_p m-0 text-white'>{offer_para}</span>
        </div>
      </div>
    </div>
  )
}

export default Seooffercard