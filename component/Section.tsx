import React from 'react'
import "./Section.css"
function Section(props) {
  return (
    <>
    
    <div className="main">
              <div className="parent">
                  <div className="part_data"  data-aos="fade-up">
                      <h3 className="heading">
                          {props.heading}</h3>
                      
                      <p className='paragraph'>
                          {props.data}
                      </p>
                      <div>
                          <button className="butn">Request a quotes </button>
                      </div>
                  </div>
                  <div className="part_img" data-aos="fade-left">
                      <img src={props.img} alt="" />
                  </div>
              </div>
      </div>
    </>
  )
}

export default Section