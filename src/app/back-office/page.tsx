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
import '../our-project.css'
import "../Component/IndustriesPages/Industries.css";
import "../Component/NewHomePage/NewHome.css";
import TestimonialSlider from '../Component/IndustriesPages/IndustriesTestimonialSection';
import '../back-office-services/backoffice.css'
const testimonials = [
  {
    id: 1,
    name: "Dr. James Whitmore",
    role: "General Physician",
    date: "May 2024",
    content:
      "Base2Brand delivered an exceptional healthcare website design that reflects patient trust and professionalism. Their expertise improved appointments and overall engagement significantly.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Hospital Operations Manager",
    date: "February 2025",
    content:
      "Our hospital needed a scalable, secure platform. Base2Brand’s healthcare web design improved speed, clarity, and workflows, enhancing patient and staff experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Dental Surgeon",
    date: "January 2024",
    content:
      "Base2Brand created a clean, patient-friendly healthcare website design. It improved online enquiries, credibility, and accessibility across all devices.",
    rating: 5
  },
  {
    id: 4,
    name: "Suresh Iyer",
    role: "Healthcare IT Administrator",
    date: "December 2025",
    content:
      "Security and compliance were critical. Base2Brand built a robust, scalable healthcare website design aligned with data protection standards.",
    rating: 4
  },
  {
    id: 5,
    name: "Dr. Ritu Malhotra",
    role: "Clinical Psychologist",
    date: "November 2023",
    content:
      "The calm, professional healthcare web design Base2Brand created improved engagement and reduced appointment drop-offs effectively.",
    rating: 5
  },
  {
    id: 6,
    name: "Daniel Thompson",
    role: "Diagnostic Center Director",
    date: "November 2023",
    content:
      "Our new healthcare website design modernized our digital presence, increased online bookings, and strengthened brand authority.",
    rating: 4
  }
];

export const metadata = {
  title : 'Back Office Customer Support - Services - Tool | Base2Brand',
  description : 'Base2Brand offers expert back office customer support services to streamline your operations. Improve service quality & productivity. Contact us for tailored solutions!'
}
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
            {/* <TestimonialSlider testimonials={testimonials}/> */}
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