"use client"
import Image from 'next/image'
import React from 'react'
type cus_card = {
  s_btn_bg: string
  s_btn_count: string
  s_title: string
  s_para: string
  s_banner: string
  s_card_bg: string
  s_title_color: string
  s_para_color: string
}
const Cusstand = ({ s_btn_bg, s_btn_count, s_title, s_para, s_banner, s_card_bg, s_title_color, s_para_color }: cus_card) => {
  return (
    <div>
      <div className="stand_card_container" style={{ background: s_card_bg }}>
        <div className="stand_card_inner">
          <div className="row">
            <div className='col-12 col-sm-12 col-md-8 d-flex align-items-center'>
              <div className="stand_card">
                <div className="s_card_btn_container">
                  <p className='m-0 s_card_btn' style={{ background: s_btn_bg }}>{s_btn_count}</p>
                </div>
                <div className="s_card_title_con">
                  <h2 className='s_card_title m-0' style={{ color: s_title_color }}>{s_title}</h2>
                </div>
                <div className='s_card_para_con col-md-9'>
                  <p className='s_card_para' style={{ color: s_para_color }}>
                    {s_para}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 pt-3 pt-sm-0'>
              <div className="s_card_img">
                <Image src={s_banner} alt='' width={1000} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cusstand
