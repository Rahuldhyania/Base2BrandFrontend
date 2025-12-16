"use client"
import React from 'react'
import Header from '../../../component/header'
import Footer from '../../../component/footer'
import { Player } from "@lottiefiles/react-lottie-player";
import Link from 'next/link';

const page = () => {
  return (
    <>
  <div>

  <Header />
  <div className="bannerSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="typewriterWrap">
                <h1 className="policy_heading_main">  
                Disclaimer 
                </h1>
              
              </div> 
            </div>
            <div className="col-md-4">
            <Player   
                  src='/json\disclaimer-banner.json'  
                  loop   
                  autoplay   
                  className="animated-imgs animated-banner-imgs"
                />
            </div>
          </div>
        </div>
      </div>


<div className='b2b-black-bg p-3 p-lg-5'> 
<section>
<div className="b2b-container-lg container text-white privacy_policy_section">
 <p>If you require any more information or have any questions about our disclaimer, please feel free to contact us by email at <Link href='mailto:info@base2brand.com' target='_blank'> info@base2brand.com.</Link></p>
 <p>We bring to the notice of all concerned that we, that is, Base2Brand, do not charge / accept any amount or security deposit from individuals or businesses for listing their products on Amazon.</p>
  <p>We have noticed that fake “Amazon Partner” badge in the name of Base2Brand have been circulated by some unauthorised persons / fraudsters. Some fraudsters are using the name of Base2Brand to solicit Amazon services and require the clients to pay processing fees or deposit amount by sending false e-mails or fraudulent website links.</p> 
<p>If any person receives any unsolicited or fraudulent communication offering paid listing of their products on Amazon from Base2Brand against payment of money, it is suggested not to respond. On receipt of any Call, Message or Email, the candidate may take some measures such as visiting the official website of the concerned company to get the contact details to enquire with the team of such company about the offer details and other relevant information.</p>
<p>We also wish to bring to the notice of all concerned that spam e-mails and messages are being sent in the name of Base2Brand with the intention of committing fraud and illegally obtaining confidential information and / or money from people. In case you receive any kind of offers, prizes or requests for personal information via e-mail, purporting to be from Base2Brand, you are advised to make sure it is genuine before responding.</p>
<p>We want to urge you to be cautious when opening links or attachments from unknown third parties. Please note that Base2Brand do not send you e-mails asking for your credit card number or other personally identifiable information. Nor do we charge or accept any amount or security deposit from any client for Amazon listing. Any communication suggesting such payment is contrary to our policy.</p>

<p>Please check <Link href='/'> www.base2brand.com</Link> to get the contact details and enquire with the company to confirm if the offers or promotions are genuine; do not respond to any fraudulent communication.</p>
<p>We state that we have already lodged complaints with law and order authorities about the said fraudulent actions. We shall not accept any liability towards the representation made in any fraudulent communication or its consequences, and such fraudulent communication shall not be treated as any kind of offer or representation by Base2Brand.</p>






</div>
</section>
</div>
      <Footer/>
  </div>
    
    
    </>
  )
}

export default page