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
              <div className="typewriterWrap  ">
                <h1 className="policy_heading_main">  
                Terms and Conditions
                </h1>
              
              </div> 
            </div>
            <div className="col-md-4">
            <Player 
                  src='/json\terms-of-service-banner.json'  
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
 
       <p>Welcome to Base2Brand! These Terms and Conditions govern your use of our website, located at <Link href='/'> www.base2brand.com</Link>, as well as our services. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website or services.</p>
       <h2>1. Acceptance of Terms</h2>
        <p>By accessing our website or using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. These terms apply to all visitors, users, and others who access or use our website and services.
        </p>
        <h2>2. Intellectual Property Rights</h2>
        <p>All content, trademarks, and other intellectual property on the Base2Brand website are owned by Base2Brand or its licensors. You may not reproduce, distribute, or create derivative works from any content on the site without express written permission from Base2Brand.</p>
        <h2>3. Client Responsibilities</h2>
        <p>As a client, you agree to:</p>
        <ul>
          <li>Provide accurate, complete, and up-to-date information when engaging our services.</li>
          <li>Ensure that you have the necessary rights and permissions to share any materials you provide to Base2Brand for the execution of services.</li>
          <li>Use our services in compliance with all applicable laws and regulations.</li>
        
        
        </ul>
        <h2>4. Service Terms</h2>
        <ul>
          <li><b>Scope of Services:</b> Base2Brand will provide services as outlined in the service agreement or proposal agreed upon by both parties</li>
          <li><b>Deliverables: </b> All deliverables will be provided in accordance with the agreed timeline and quality standards. </li>
          <li><b>Payment Terms:</b> Payment is due as specified in the service agreement. Late payments may incur additional charges as outlined in the agreement.</li>
        </ul>
        <h2>5. Prohibited Activities </h2>
        <p>You are prohibited from:</p>
        <ul>
          <li>Using our services for any unlawful purposes. </li>
          <li>Distributing malware or harmful content.</li>
          <li>Attempting to gain unauthorized access to our systems.
          </li>
          <li>Posting false or misleading information.
          </li>
        </ul>
          <h2>6. Client Confidentiality</h2>
          <p>Both Base2Brand and the client agree to maintain the confidentiality of any proprietary or confidential information exchanged during the course of the service relationship. This confidentiality obligation shall survive the termination of the service agreement.
          </p>
          <h2>7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We do not control and are not responsible for the content or practices of these sites. We recommend reviewing the terms and conditions of any third-party site you visit.</p>
          <h2>8. Limitation of Liability</h2>
          <p>In no event shall Base2Brand be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services, including but not limited to loss of profits, data, or goodwill.</p>
          <h2>9. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless Base2Brand and its affiliates, directors, officers, employees, and agents from any claims, losses, damages, liabilities, costs, or expenses (including reasonable attorney&apos;s fees) arising out of your use of our services or your violation of these Terms and Conditions.</p>
          <h2>10. Modifications to Terms</h2>
          <p>Base2Brand reserves the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the revised terms on this page. Your continued use of our website and services after any changes constitutes acceptance of those changes.</p>
          <h2>11. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p><b>Email : </b><Link href='mailto:tech@base2brand.com' target='_blank'>tech@base2brand.com </Link></p>
          <p><b>Email : </b><Link href='www.base2brand.com'>www.base2brand.com</Link></p>
</div>  
</section>
</div>
      <Footer/>
  </div>
    
    
    </>
  )
}

export default page