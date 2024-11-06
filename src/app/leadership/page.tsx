import Breadcrumb from "@/components/Common/Breadcrumb";
import LeadershipSectionFour from "@/components/Leadership/LeadershipSectionFour";
import LeadershipSectionOne from "@/components/Leadership/LeadershipSectionOne";
import LeadershipSectionThree from "@/components/Leadership/LeadershipSectionThree";
import LeadershipSectionTwo from "@/components/Leadership/LeadershipSectionTwo";
import RootLayout from "@/app/defaultLayout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const LeadershipPage = () => {
  return (
    <RootLayout>
      {/* <div className="pt-28 lg:pt-[120px]"></div> */}
      <Breadcrumb
        pageName="Leadership"
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
        <div className="pt-8 text-center max-w-[900px] mx-auto">
          <p className="text-base sm:text-lg font-medium leading-relaxed text-body-color">
            Our executive management team combines decades of semiconductor IC
            development and product marketing experience with focus on customer
            needs to offer best-in-class Product/Solutions.
          </p>
        </div>
      </section>
      <LeadershipSectionOne />
      <LeadershipSectionTwo />
      <LeadershipSectionThree />
      <LeadershipSectionFour />
    </RootLayout>
  );
};

export default LeadershipPage;
