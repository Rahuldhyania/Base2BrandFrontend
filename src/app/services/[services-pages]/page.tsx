import "./Servicespages.css"; 
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

export const revalidate = 3600;

const BASE_URL = "https://www.base2brand.com";

async function getServicePage(slug: string) {
  try {
    const res = await fetch(
      `https://adminbackend.base2brand.com/api/B2Badmin/slug/${slug}`,
      { next: { revalidate, tags: [
        `service-page`,
        `service-page:${slug}`
      ] } }
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
      "https://adminbackend.base2brand.com/api/B2Badmin/page/getall",
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
  const data = await getServicePage(slug);
  if (!data?.data) return { robots: { index: false, follow: true } };

  const title = data.data.seoPageTitle || data.data.heroSection?.title || "Base2Brand";
  const description = data.data.pageKeywords || data.data.heroSection?.description || "";
  const canonical = `${BASE_URL}/service/${slug}`;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        { url: data.data.heroSection?.topImage || "/img/portfolio/b1.png" },
      ],
    },
  };
}

export default async function Dynamicservicepage(
  { params }: { params: { "services-pages": string } }
) {
  const slug = params["services-pages"];
  const data = await getServicePage(slug);
  if (!data) {
    return <Notfound />;
  }

  return (
    <div>
      <Header />
      {data?.data ? (
        <div>
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
          <Hiredubaireview reviewdata={data.data.testimonialsSection.testimonials} />
          <Hiretalkform bannerimage={data.data.heroSection.topImage} />
          <Hirefaq faqData={data.data.faqSection.faqs} />
        </div>
      ) : (
        <Notfound />
      )}
      <Footer />
    </div>
  );
}
