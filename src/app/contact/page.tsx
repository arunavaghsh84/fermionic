import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import RootLayout from "@/app/defaultLayout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  // description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <RootLayout>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </RootLayout>
  );
};

export default ContactPage;
