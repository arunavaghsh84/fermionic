import Breadcrumb from "@/components/Common/Breadcrumb";
import Career from "@/components/Career";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const CareerPagex = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Send your CV to careers@fermionic.design, mentioning the post applied for in the subject line."
      />

      <Career />
    </>
  );
};

export default CareerPagex;