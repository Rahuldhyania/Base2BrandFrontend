
import { memo } from 'react';

const BackOfficeSupportTool = ({title,subtitle}) => {
    const checkImage = ((
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.424 10.432C15.984 10.432 15.624 10.792 15.624 11.232V12.312C15.624 13.92 14.312 15.232 12.704 15.232H7.32801C5.72001 15.232 4.408 13.92 4.408 12.312V6.93603C4.408 5.32803 5.72001 4.01602 7.32801 4.01602H8.40001C8.84001 4.01602 9.20001 3.65602 9.20001 3.21602C9.20001 2.77602 8.84001 2.41602 8.40001 2.41602H7.32801C4.83201 2.41602 2.808 4.44803 2.808 6.93603V12.312C2.808 14.808 4.84001 16.832 7.32801 16.832H12.704C15.2 16.832 17.224 14.8 17.224 12.312V11.232C17.224 10.792 16.864 10.432 16.424 10.432Z"fill="white"/>
            <path d="M6.23202 8.2721C5.92002 8.5841 5.92002 9.0881 6.23202 9.4001L8.84002 12.0081C9.12802 12.2961 9.52002 12.456 9.92802 12.456H10.024C10.464 12.432 10.872 12.2161 11.144 11.8641L16.224 5.32813C16.496 4.97613 16.432 4.48011 16.088 4.20811C15.736 3.93611 15.24 4.00015 14.968 4.34415L9.92802 10.8321L7.36802 8.2721C7.05602 7.96007 6.55202 7.96007 6.24002 8.2721H6.23202Z"fill="white"/>
        </svg>
    ));

    const backOfficeTool =[
        {
            id:1,
            title:"Customer Relationship ",
            subtitle:"Management (CRM) Software",
            item1:"Salesforce",
            item2:"HubSpot CRM",
            item3:"Zoho CRM",
            item4:"Microsoft Dynamics 365",
            item5:"Pipedrive",
            item6:"Monday Sales CRM"
        },
        {
            id:2,
            title:"Help Desk and Ticketing",
            subtitle:"Software",
            item1:"Zendesk",
            item2:"Freshdesk",
            item3:"Help Scout",
            item4:"Zoho Desk",
            item5:"Jira Service Management",
            item6:"Kayako"
        },
        {
            id:3,
            title:"Live Chat and Messaging",
            subtitle:"Software",
            item1:"Intercom",
            item2:"Live Chat",
            item3:"Drift",
            item4:"Tawk.to",
            item5:"Crisp",
            item6:"WhatsApp Business API"
        }
    ]
  return (
    <div className='back-office-support-tool'>
        <div className='b2b-container-lg images_container_index'>
            <h2 data-aos="fade-up" data-aos-duration="500">{title}</h2>
            <h3 data-aos="fade-up" data-aos-duration="600">{subtitle}</h3>
            <div className="baoff_cus_sup_left_img"></div>
            <div className='baoff_cus_sup_right_img'></div>
            <div className='warper-back-tool'>
                {backOfficeTool.map((item , index)=>(
                    <div key={item.id} className='back-tool-item'data-aos="fade-up" data-aos-duration="500" data-aos-delay={`${index * 100}`}> 
                        <h2>{item.title}</h2>
                        <h3>{item.subtitle}</h3>
                        <div className='inner-ct-itm'>
                            <h4>{checkImage}{item.item1}</h4>
                            <h4>{checkImage}{item.item2}</h4>
                            <h4>{checkImage}{item.item3}</h4>
                            <h4>{checkImage}{item.item4}</h4>
                            <h4>{checkImage}{item.item5}</h4>
                            <h4>{checkImage}{item.item6}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default memo(BackOfficeSupportTool);