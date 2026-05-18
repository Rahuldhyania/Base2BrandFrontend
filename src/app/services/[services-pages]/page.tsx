import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import Hiredubaibanner from "./components/Hiredubaibanner";
import Whyb2b from "./components/Whyb2b";
import Hiretabsection from "./components/Hiretabsection";
import Hireprocess from "./components/Hireprocess";
import Hiredubaireview from "./components/Hiredubaireview";
import Hiretalkform from "./components/Hiretalkform";
import Hirefaq from "./components/Hirefaq";
import Notfound from "./Notfound";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import "./Servicespages.css"; 

export const revalidate = 3600;

const BASE_URL = "https://www.base2brand.com";

const deletslug = [
  '/hire-shopify-developer-dallas',
  '/hire-shopify-developer-in-usa',
  '/hire-shopify-developer-in-australia',
  '/hire-shopify-experts-brisbane',
  '/best-seo-agency-in-dubai',
  '/online-marketing-firms-houston',
  '/shopify-experts-australia',
  '/hire-shopify-developers-in-london',
  '/shopify-experts-birmingham',
  '/shopify-agency-in-manchester',
  '/bristol-shopify-experts',
  '/hire-shopify-experts-nottingham',
  '/cardiff-web-design-agency',
  '/shopify-agency-in-cardiff',
  '/hire-shopify-experts-london',
  '/hire-shopify-developers-hyderabad',
  '/hire-shopify-developers-bengaluru',
  '/best-shopify-developers-manchester',
  '/hire-shopify-experts-cardiff',
  '/top-rated-shopify-agency-in-london',
  '/best-digital-marketing-services-in-chandigarh',
  '/best-digital-marketing-company-in-india',
  '/top-rated-seo-company-chandigarh',
  '/web-designing-company-in-chandigarh',
  '/website-development-company-in-mohali',
  '/best-web-development-company-in-india',
  '/best-digital-marketing-company-in-mohali',
  '/top-digital-marketing-agency-mohali',
  '/web-development-in-chandigarh',
  '/web-development-company-in-mohali',
  '/web-design-company-in-mohali',
  '/web-designing-in-mohali',
  '/top-web-designing-in-chandigarh',
  '/web-development-company-in-chandigarh',
  '/best-website-development-company-in-chandigarh',
  '/website-designer-in-chandigarh',
  '/best-website-development-services-in-india',
  '/white-label-seo',
  '/local-seo',
  '/ecommerce-seo',
  '/fashion-seo-services',
  '/digital-marketing-ai-tools',
  '/ai-chat-bot',
  '/ai-digital-marketing-agency',
  '/best-chatbot-model',
  '/llm-ai-services',
  '/blockchain-development-services',
  '/blockchain-developers',
  '/ai-model-apis-service',
  '/ar-development-agency',
  '/ar-vr-company-in-india',
  '/best-blockchain-development-company',
];

async function getServicePage(slug: string) {
  try {
    const res = await fetch(
      `https://admin.b2bcampus.com/api/v2/api/B2Badmin/slug/${slug}`,
      { 
        next: { 
          revalidate, 
          tags: [
            `service-page`,
            `service-page:${slug}`
          ] 
        } 
      }
    );

    if (res.status === 404) return null;
    if (!res.ok) return null;

    return await res.json();
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://admin.b2bcampus.com/api/v2/api/B2Badmin/page/getall",
      { next: { revalidate } }
    );

    const result = await res.json();

    return (result?.data || []).map((item: any) => ({
      "services-pages": item.pageSlug,
    }));
  } catch {
    return [] as { [key: string]: string }[];
  }
}

export async function generateMetadata(
  { params }: { params: { "services-pages": string } }
): Promise<Metadata> {

  const slug = params["services-pages"];
  const fullSlug = `/${slug}`;

  // redirect slugs noindex
  if (deletslug.includes(fullSlug)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const data = await getServicePage(slug);

  if (!data?.data) {
    return {
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title =
    data.data.seoPageTitle ||
    data.data.heroSection?.title ||
    "Base2Brand";

  const description =
    data.data.pageKeywords ||
    data.data.heroSection?.description ||
    "";

  const canonical = `${BASE_URL}/services/${slug}`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url:
            data.data.heroSection?.topImage ||
            "/img/portfolio/b1.png",
        },
      ],
    },
  };
}

export default async function Dynamicservicepage(
  { params }: { params: { "services-pages": string } }
) {

  const slug = params["services-pages"];
  const fullSlug = `/${slug}`;

  if (deletslug.includes(fullSlug)) {
    redirect("/services");
  }

  const data = await getServicePage(slug);

  if (!data || !data?.data) {
    redirect("/services");
  }

  return (
    <div>
      <Header />

      <Hiredubaibanner
        bannerimage={data.data.heroSection.backgroundImage}
        pagetitle={data.data.heroSection.title}
        pagedescription={data.data.heroSection.description}
        right_banner={data.data.heroSection.topImage}
      />

      <Whyb2b
        whytitle={data.data.aboutSection.title}
        whydescription={data.data.aboutSection.description}
        whybanner={data.data.aboutSection.image}
      />

      <Hiretabsection
        tabtitle={data.data.challengesSection.title}
        tabcontent={data.data.challengesSection.items}
      />

      <Hireprocess
        hireprocessdata={data.data.processSection.steps}
        hireprocesstitle={data.data.processSection.title}
      />

      <Hiredubaireview
        reviewdata={data.data.testimonialsSection.testimonials}
      />

      <Hiretalkform
        bannerimage={data.data.heroSection.topImage}
      />

      <Hirefaq
        faqData={data.data.faqSection.faqs}
      />

      <Footer />
    </div>
  );
}


// import React from 'react'
// import { redirect } from "next/navigation";
// const page = () => {
//   return redirect('/services')
// }
// export default page
