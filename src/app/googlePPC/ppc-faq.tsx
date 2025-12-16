'use client'
import { useEffect } from 'react'; 
import React from "react";  

export default function FAQ() {
 
  

  return (
    <>  
        <div className="pl-4 pr-4 pb-0 bg_patner"> 
    <div className="container-fluid pb-5 position-relative">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
            <h2 className='text-white'>FAQs</h2>
        </div>
        <div className="col-md-6"  >
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item"  >
    <h2 className="accordion-header fs-4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What exactly is PPC?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">PPC is an acronym for pay-per-click. This model of internet marketing requires that advertisers pay a fee every time their ads are clicked. It&apos;s basically a way to buy visits to your website, instead of trying to earn them organically. PPC through search engine advertising is the most common form of PPC.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What is Ecommerce PPC?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">PPC for Ecommerce, also called the ecommerce PPC, is an online advertising strategy that advertises an online shop and the products listed on it via PPC ads. These ads may appear on search engines, social networks, and websites. PPC for Ecommerce is a great way to generate sales, as it targets ready-to buy shoppers.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do PPC work?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Steps to setup a pay per click campaign
      <p>a) Set your goals</p>
      <p>b) Choose where to advertise.</p>
      <p>c) Select the keywords that you wish to bid on.</p>
      <p>d) You can set your bids for various keywords and choose your daily or monthly budget.</p>
      <p>e) Create your PPC advertising and link to the landing page from your website.</p>
          </div>
    </div>
  </div> 
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew" aria-expanded="false" aria-controls="flush-collapseNew">
      What are the main platforms for running PPC campaigns?
      </button>
    </h2>
    <div id="flush-collapseNew" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">The main platforms for running PPC campaigns include Google Ads (formerly Google AdWords), Bing Ads, and social media platforms such as Facebook Ads, Twitter Ads, and LinkedIn Ads.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
      How does keyword research play a role in PPC advertising?
      </button>
    </h2>
    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Keyword research is crucial in PPC advertising as it helps identify relevant keywords and phrases that potential customers are likely to use when searching for products or services. Effective keyword research informs ad copy creation, bid management, and campaign targeting.
    </div>
    </div>
  </div> 
</div>
        </div>
        <div className="col-md-6"  >
        <div className="accordion accordion-flush" id="accordion">
        <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How do you determine the right budget for a PPC campaign?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">Determining the right budget for a PPC campaign involves considering factors such as campaign goals, target audience size, competition, and the cost-per-click (CPC) of keywords. It&apos;s essential to allocate a budget that aligns with your advertising objectives and allows for testing and optimization.</div>
    
  </div> 

  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      What is the cost of a PPC campaign?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Businesses may need to pay between $1 and $2 per click to advertise through the Google search network. The average monthly PPC spend for small and medium-sized companies is between $9,000 to $10,000. This amounts to between $108,000 and $120,000 annually.</div>
    </div>
  </div>

  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Does Facebook allow pay-per-click?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Let&apos;s begin at the beginning. Facebook is a pay per click marketing platform. This means you will be paid every time someone clicks your ads. A solid Facebook PPC strategy (pay-per click) will help you increase traffic to your site and increase sales revenue.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      What do you mean by Amazon PPC management?

      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Amazon PPC (pay-per click) is an advertising model where advertisers pay Amazon a fee when a customer clicks on their advertisement. There are three types of Amazon ads: Sponsored Products, Sponsored Display Ads and Sponsored Brands.</div>
    </div>
  </div> 
        </div>
        </div>
      </div> 
</div>
</div>
</>
)
}