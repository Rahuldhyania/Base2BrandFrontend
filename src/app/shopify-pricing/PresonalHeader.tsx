import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./PresonalHeader.css"
import base2brandlogo from "../../../public/img/logo/base2brandlogo.svg"
const PresonalHeader = () => {
  return (
   <>
   
   <header className='position-relative w-100'>
<div className="count-row position-absolute w-100 ">
    <div className="b2b-container-lg">
       <div className=" d-flex justify-content-between align-items-center pt-3  pb-3">
        <div className="flex1">
            <Link href="/">
            <Image className='logo-header'  src={base2brandlogo} alt=''/>
            </Link>
        </div>
        <div className='text-white gk-rendom-text headercall'>
          <a className='text-white gk-heder gk-animation' href="tel:9872487850">+91-9872-487-850</a>        </div>
        {/* <div className="flex2"><button className='gk-b2b-btn b2b-btn-sm '>contact</button></div> */}
       </div>

       
    </div>
</div>

   </header>
   
   
   </>
  )
}

export default PresonalHeader