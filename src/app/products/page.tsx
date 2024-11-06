import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Products from "@/components/Products";
import RootLayout from "@/app/defaultLayout/layout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {
  return (
    <RootLayout>
      <Breadcrumb
        pageName="Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Products />
      
    </RootLayout>
  );
};

export default Blog;
