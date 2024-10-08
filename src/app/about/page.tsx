import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <div className="pt-28 lg:pt-[120px]"></div>
      <Breadcrumb
        pageName="About Us"
        description={
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <p>FermionIC Design is a fabless semiconductor company developing IPs and chipsets for wireline and wireless communication systems.</p>
          <p>FermionIC’s multiprotocol SERDES IP supports up to 32GBps NRZ data-rate and meets electrical specifications of PCIe5/USB4/Ethernet/JESD standards.</p>
          <p>Our upcoming Hybrid beamformer IC enables miniaturization of phased-array active antenna systems for 5G, SATCOM, and Radar.</p>
        `,
            }}
          />
        }
      />

      <section className="container">
        <div className="-mx-4 flex flex-wrap items-startpt-6 lg:pt-14">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-8">
              <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Leadership
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-wrap items-start">
          <p className="text-base font-medium leading-relaxed text-body-color">
            Our executive management team combines decades of semiconductor IC
            development and product marketing experience with focus on customer
            needs to offer best-in-class Product/Solutions.
          </p>
        </div>
      </section>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
