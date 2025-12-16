
// comment code 

// import React from "react";
// import Image from "next/image";
// import callto from "../../../public/img/CALLTO.svg";
// import mailto from "../../../public/img/mailto.svg";
// import location from "../../../public/img/location.svg";

// const ContactFormFooter = () => {
//   return (
//     <section className="gk-bg-Contact pt-5 pb-5">
//       <div className="b2b-container-lg ">
//         <h2 className="gk-heading-bold text-center text-uppercase m-auto gk-width">
//           Ready to Boost Your Digital Growth?
//         </h2>
//         <p className="b2b-sub-text text-center pt-3 pb-3 gk-width-lg">
//           Fill out the form below and let Base2Brand boom your online success.
//           Our digital marketing packages enhance your brand, drive traffic, and maximize growth.
//         </p>

//         <div className="row ">
//           {/* Form Section */}
//           <div className="col-xl-6 bg-accodian gk-rounded">
//             <div className="p-4 w-100">
//               <h3 className="b2b-sub-heading text-white">
//                 Submit Details Below To Get A Call Back
//               </h3>
//               <form>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="text-white mb-2">
//                     Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="Enter your name"
//                     className="form-control w-100"
//                     style={{
//                       padding: "10px",
//                       borderStyle: "none",
//                       border: "1px solid",
//                     }}
//                   />
//                 </div>
//                 <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
//                   <div className="me-md-2 flex-fill mb-3 mb-md-0">
//                     <label htmlFor="email" className="text-white mb-2">
//                       Email<span style={{ color: "red" }}> *</span>
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       className="form-control w-100"
//                       style={{
//                         padding: "10px",
//                         borderStyle: "none",
//                         border: "1px solid",
//                       }}
//                     />
//                   </div>
//                   <div className="ms-md-2 flex-fill">
//                     <label htmlFor="phone" className="text-white mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       id="phone"
//                       type="number"
//                       placeholder="Enter your number"
//                       className="form-control w-100"
//                       style={{
//                         padding: "10px",
//                         borderStyle: "none",
//                         border: "1px solid",
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="message" className="text-white mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     placeholder="Give us a small brief about your project"
//                     className="form-control w-100"
//                     style={{
//                       height: "150px",
//                       padding: "10px",
//                       borderStyle: "none",
//                       border: "1px solid",
//                     }}
//                   ></textarea>
//                 </div>
//                 <div>
//                   <button
//                     type="button"
//                     className="gk-b2b-btn gk-bg-b2b-btn b2b-btn-sm mt-3 w-100"
//                   >
//                     Send Mail
//                   </button>
//                   <a
//                     href="https://wa.me/919900000000?text=Hello%20there!"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-4 gk-acco-text w-100 border-dark p-2 rounded d-block text-center text-white footer-btn"
                
//                   >
//                     Send a WhatsApp Message
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Contact Info and Map Section */}
//           <div className=" col-xl-6 p-0 " style={{
//             background:"#000",
//             borderRadius:"20px",
//           }}>
//             <div className="d-flex flex-column justify-content-between ">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.793892497647!2d76.69216501500242!3d30.711216781650584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee55f17e093d%3A0xeb3482c7f127c305!2sF%2C%20209%2C%20Phase%208B%2C%20Industrial%20Area%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160074!5e0!3m2!1sen!2sin!4v1633794878721!5m2!1sen!2sin"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0,
//                   borderRadius:"20px"
//                  }}
//                 allowFullScreen={true}
//                 loading="lazy"
//               ></iframe>
//               <div className="contact-info  p-4 pt-5">
//                 <div className="d-flex align-items-center gap-3 mb-3 justify-content-start">
//                   <Image className="Image-icon" src={callto} alt="Call Icon" />
//                   <span className="gk-acco-text text-white">
//                     <a href="tel:+919990000000" className="text-white">
//                       +91-9900-000-000
//                     </a>
//                   </span>
//                 </div>
//                 <div className="d-flex align-items-center gap-3 mb-3 justify-content-start">
//                   <Image className="Image-icon" src={mailto} alt="Mail Icon" />
//                   <span className="gk-acco-text text-white">
//                     <a href="mailto:base2brand@gmail.com" className="text-white">
//                       base2brand@gmail.com
//                     </a>
//                   </span>
//                 </div>
//                 <div className="d-flex align-items-start gap-3justify-content-start gap-3">
//                   <Image className="Image-icon" src={location} alt="Location Icon" />
//                   <span className="gk-acco-text text-white lg-w-65">
//                     <a
//                       href="https://www.google.com/maps/place/Base+2+Brand+Infotech+Pvt.+Ltd./@30.7112168,76.692165,17z/data=!4m15!1m8!3m7!1s0x390fee55f17e093d:0xeb3482c7f127c305!2sF,+209,+Phase+8B,+Industrial+Area,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160074!3b1!8m2!3d30.7112168!4d76.692165!16s%2Fg%2F11vywjx481!3m5!1s0x390fef3d91f0cc77:0x214b2cbd35685f0d!8m2!3d30.7112168!4d76.692165!16s%2Fg%2F11r3l8std0?entry=ttu"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white w-50 "
//                     >
//                       F, 209, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160074
//                     </a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormFooter;
