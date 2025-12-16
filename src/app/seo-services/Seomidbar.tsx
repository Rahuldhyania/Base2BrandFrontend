import React from 'react'

export default function Seomidbar() {
  return (
    <div className='pt-5 pb-5' style={{
        background:"linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
    }}>
      <div className="container">
        <div className="text-center">
        <h2 className="b2b-partners-heading"  data-aos="fade-up">
          Why SEO is Necessary for a Website?
        </h2>
        </div>  
        <div className="row justify-content-center">
            <div className='col-md-4 col-xl-3 mt-3' data-aos="fade-up" data-aos-duration="500">
                <div className="mid_bar_outer">
                   <div className="mid_bar_inner">
                       <p className='text-white dev_choose_t1 m-0 text-center'>
                         <span className='mid_bar_color_text'>93% </span>
                          of all online experiences begin with a search engine.
                       </p>
                   </div>
                </div>
            </div>
            <div className='col-md-4 col-xl-3 mt-3' data-aos="fade-up" data-aos-duration="600">
                <div className="mid_bar_outer">
                   <div className="mid_bar_inner">
                       <p className='text-white dev_choose_t1 m-0 text-center'>
                         Businesses on the first page of Google receive <span className='mid_bar_color_text'>91.5% </span> of search traffic.
                       </p>
                   </div>
                </div>
            </div>
            <div className='col-md-4 col-xl-3 mt-3' data-aos="fade-up" data-aos-duration="700">
                <div className="mid_bar_outer">
                   <div className="mid_bar_inner">
                       <p className='text-white dev_choose_t1 m-0 text-center '>
                         A well SEO optimized website can increase conversion rates by up to <span className='mid_bar_color_text'>14.6%. </span> 
                       </p>
                   </div>
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}
