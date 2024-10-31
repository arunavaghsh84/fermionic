import AboutSection from "@/components/About/AboutSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <div className="pt-28 lg:pt-[120px]"></div> */}
      <Breadcrumb
        pageName="About Us"
        description={
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <p>FermionIC Design is a fabless semiconductor company.   </p>
        `,
            }}
          />
        }
      />

      <section className="container">
        <div className="pt-8 text-center">
          <p className="text-base sm:text-lg font-medium leading-relaxed text-body-color">
            FermionIC Design is a fabless semiconductor company developing IPs
            and chipsets for wireline and wireless communication systems.
          </p>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-body-color">
            Our multiprotocol SERDES IP supports up-to 32GBps NRZ data-rate and
            meets electrical specifications of PCIe5/USB4/Ethernet/JESD
            standard. FermionIC&apos;s innovative SERDES architecture guarantees
            best-in-class latency across various nodes, multiple foundries and
            protocols.
          </p>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-body-color">
            Our upcoming Hybrid beamformer IC enables miniaturization of
            phased-array active antenna systems for 5G, SATCOM and Radar.
          </p>
        </div>
      </section>
      <AboutSection />
    </>
  );
};

export default AboutPage;
