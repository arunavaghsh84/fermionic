import Breadcrumb from "@/components/Common/Breadcrumb";
import Career from "@/components/Career";
import RootLayout from "@/app/defaultLayout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  // description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const CareerPagex = () => {
  return (
    <RootLayout>
      <Breadcrumb
        pageName="Careers"
        description="Send your CV to careers@fermionic.design, mentioning the post applied for in the subject line."
      />

      <Career />
    </RootLayout>
  );
};

export default CareerPagex;