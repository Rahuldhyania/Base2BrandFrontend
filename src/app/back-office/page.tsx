import { memo } from 'react';
import Footer from '../../../component/footer';
import Header from '../../../component/header';
import BackOfficeBanner from '../../app/back-office/BackOfficeBanner';
import TopServices from './TopServices';
import WhoWeAre from './WhoWeAre';
import BackOfficeSupportTool from './BackOfficeSupportTool';
import BackOfficeAbout from './backOfficeAbout';
import TopReason from './topReason';
import BackProvenResult from './BackProvenResult';
import BackIndustriesWeServe from './BackIndustriesWeServe';
import BackReadyScale from './BackReadyScale';
import BackClientReview from './BackClientReview';
import BackOurGlobal from './BackOurGlobal';
import BackTrsustByLogo from './BackTrsustByLogo';
import './back-office.css'
const Page = () => {
  return (
    <div>
      
          <Header />
          <div style={{ overflow: "hidden" }}>
            <BackOfficeBanner 
                Title="Back Office"
                subtitle="Customer Support"
                description="Focus on Growth. Let Us Handle the Rest."
                buttonText="Connect Now"
                buttonUrl="/contact-us"
            />
            <TopServices />
            <WhoWeAre
                image="/back-offce-img/who-we-are.png"
                title="Who we are"
                subheading="and why agencies trust us"
                description="Base2Brand is a performance-driven digital marketing and technology partner helping businesses grow faster online. We specialize in data-driven marketing, high-converting campaigns, and scalable digital strategies designed to increase leads, sales, and brand visibility."
                buttonTitle="See how we can grow your business" 
                buttonUrl="/"
                flexDirection={false} 
            />
            <BackProvenResult 
              title="Proven Results That Drive Business Success"
            />
            <BackIndustriesWeServe 
              title="Industries We Serve"
              image="/back-offce-img/we-serve.png"
            />
            <BackOfficeAbout
                title="About Us"
                subtitle="Base2Brand Back Office Services"
                description="At Base2Brand, we take care of the back-office tasks so you can focus on growing your business. Our expert team provides seamless, cost-effective solutions for industries like eCommerce, healthcare, hospitality, and more. From customer support to data management, we ensure your operations run smoothly and securely. Let us handle the details while you drive success – efficient, reliable, and scalable back-office support, tailored to your needs."
                image="/back-offce-img/back-office-about.png"
            />  
            <BackOfficeSupportTool 
                title="Back Office Support Tools"
                subtitle="We Can Work With"
            />
            <TopReason
              title="Top Reasons To Choose"
              subtitle="Our Back Office Support Service"
              image="/back-offce-img/top-reason-image.png"
            />
            <BackTrsustByLogo 
              title="Trusted by"
              subheading=" leading brands"
            />
            <BackOurGlobal />
            <BackClientReview />
            <BackReadyScale 
              title="Ready to scale your business"
              description="with smart back officecustomer support?"
              buttonTitle="Let’s Connect Today"
              buttonUrl="/contact-us"
              image="/back-offce-img/back-ready-scale.png"
            />
          </div>
          <Footer />
        </div>
  );
};

export default memo(Page);