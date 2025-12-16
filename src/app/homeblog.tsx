'use client'
import React, { useState, useEffect } from 'react';  
import blog1 from '../../public/img/blog1.png';        
import blog2 from '../../public/img/blog2.png';        
import blog3 from '../../public/img/blog3.png';        
import arrowRight from '../../public/img/arrow-right.svg';        
import './our-project.css';
import { useRouter } from 'next/navigation';

interface BlogItem {
  id: string;
  title: string;
  term: string;
  image_url: string;
  created_at: string;
}
export default function Homeblog() {
  const router = useRouter(); 
  const [data, setData] = useState<BlogItem[] | null>(null);
   
  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await fetch('https://empmgt.base2brand.com/blog-postdata');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (  
    <>  
      <div className='b2b-home-blog'>
          <div className="b2b-container-lg"> 
            <div className="row"> 
              <div className="col-12 text-center mb-4">
                <h2 className='b2b-main-heading text-center text-uppercase'>Our Recent Blogs </h2>
                <p className="b2b-text">The latest in IT Trends, Strategies and Tips.</p>
              </div>
              {data && data.slice(0, 3).map((blog: BlogItem) => (
              <div key={blog.id} className="col-12 col-sm-6 mb-sm-4 mb-4 col-md-4">
                <div className="blog_section position-relative">
                  <img className="blog" src={blog.image_url} alt="Blog" />
                  <div className="pt-4 pb-3">
                    <p className="blog_desc pb-5">{blog.title}</p>
                      
                  </div>
                  
                      <button className='b2b-blog-btn' onClick={() => router.push(`/blog-detail?id=${blog.id}`)}>Read More <img src={arrowRight.src} alt=""/></button>
                    
                </div>
            </div>
         
            ))}

              <div className="col-md-12 mt-5 text-center">
              <a href='/blog' className="b2b-btn b2b-btn-sm">Show More</a>

              </div>
            </div> 
          </div> 
      </div>
    </>
  )
}
