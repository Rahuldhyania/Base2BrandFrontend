"use client"
import Image from 'next/image'
import React from 'react'
type review_card = {
   re_name: string
   re_user: string
   re_para: string
}
const Reviewcard = ({ re_name, re_user, re_para }: review_card) => {
   return (
      <div>
         <div className="cus_review_outer">
            <div className="cus_re_inner">
               <div className="re_name">
                  <Image src={re_name} alt='' width={1000} height={500} />
               </div>
               <div className="re_user">
                  <h5 className='' style={{ color: "#7D9BFF" }}>{re_user}</h5>
               </div>
               <div className="cha_para">
                  <p className='text-white'>{re_para}</p>
               </div>
               <div className="cus_rating">
                  <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480822_m41uuf.png' alt='' width={1000} height={500} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Reviewcard