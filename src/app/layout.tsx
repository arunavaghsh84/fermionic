// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";
import "../styles/index.css";
import "../styles/custom.scss";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${montserrat.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
