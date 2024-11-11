import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import RootLayout from "../defaultLayout/layout";

export const metadata: Metadata = {
  title: "Blogs",
  // description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const Blogs = () => {
  
  return (
    <RootLayout>
      <Breadcrumb
        pageName="Blogs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <SingleBlog />
    </RootLayout>
  );
};

export default Blogs;
