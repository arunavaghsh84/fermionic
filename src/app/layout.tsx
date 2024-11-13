"use client";
import { Montserrat } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";
import "../styles/index.css";
import "../styles/custom.scss";
import { useEffect, useState } from "react";
import Loader from "@/components/Common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${montserrat.className}`}>
        <ToastContainer position="bottom-right" />
        <Providers>{loading ? <Loader /> : children}</Providers>
      </body>
    </html>
  );
}
