"use client"
import React from "react";

import Typewriter from 'typewriter-effect';
import { Player } from "@lottiefiles/react-lottie-player";
import Header from "../../../component/header";
import Footer from "../../../component/footer";

const underconstrution = () => {
    return (
        <>
        <Header/>
            <section className="w-100 b2b-brands-wrap gk-radialGradient  d-flex flex-column justify-content-center " style={{
              
            }}>
                     <div className="gk-motion text-center text-white">
               
              {/* <Typewriter 
                  options={{
                    strings: ['Under Constraction', 'Under Constraction', 'Under Constraction','Under Constraction'],
                    autoStart: true,
                    loop: true,
                    
                  }}
                /> */}
              </div>
           
                <div className="" data-aos="fade-up-left" data-aos-delay="900">
                   
                    <Player
                        src='/json/underconstraction.json'
                        loop
                        autoplay
                        className="animated-imgs"
                    />

                   
                </div>
                {/* <div>  <h1 className="text-center w-full text-uppercase text-white underconstraction">404</h1></div> */}
            </section>
<Footer/>
        </>
    )
}
export default underconstrution;