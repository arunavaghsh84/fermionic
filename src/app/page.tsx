import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import "@/styles/Animate/animate.min.css";
import RootLayout from "@/app/defaultLayout/layout";

export const metadata: Metadata = {
  title: "Home",
  // description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <RootLayout>
      <ScrollUp />
      <Hero />
      <Products />
      <Video />
      <Contact />
    </RootLayout>
  );
}
