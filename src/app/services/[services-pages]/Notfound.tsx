// import React from 'react'
// import { notFound } from "next/navigation";
// import Header from '../../../../component/header';
// import Footer from '../../../../component/footer';
// export default function Notfound() {
//   console.log("hello from not found");
  
//   return  <>
//   <Header/>
//    {notFound()}
//    <Footer/>
//   </>
// }
import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
     <>
              <Header />
  
              <main
                  className="d-flex flex-column justify-content-center align-items-center text-center "
                  style={{background :'#091B3A'}}
              >
                <Image
                 src={'/gif/gif404.gif'}
                 alt=""
                 width={1000}
                 height={500}
                 className="h-full"
                 style={{
                  maxHeight: '600px',
                  objectFit:'contain'
                 }}
                 />
              </main>
          
              <div className="py-4 text-center"
                        style={{background :'#091B3A'}}
                        >
                           <h2 className="text-white">
                            404 Error Go To <Link href={'/contact-us'}> Contact Us</Link> 
                           </h2>
                         </div>
  
              <Footer />
          </>
  );
}
