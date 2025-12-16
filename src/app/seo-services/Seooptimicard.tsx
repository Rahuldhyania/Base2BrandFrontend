"use client"
import Image from 'next/image'
import React from 'react'
type seooptimization = {
  opticard_title: string
  opticard_para: string
}
const Seooptimicard = ({ opticard_title, opticard_para }: seooptimization) => {
  return (
    <div className='optimi_inner' data-aos="fade-up">
      <div className="opticard_arrow">
        <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480351_ioyjip.png' alt='' width={1000} height={500} />
      </div>
      <div className='opticard_text'>
        <p className='dev_choose_t1 m-0 pb-2 mid_bar_color_text'>{opticard_title}</p>
        <span className='banner_card_p text-white'>{opticard_para}</span>
      </div>
    </div>
  )
}
export default Seooptimicard
