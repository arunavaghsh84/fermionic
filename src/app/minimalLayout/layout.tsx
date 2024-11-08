import { Montserrat } from "next/font/google";
import { Providers } from "@/app/providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${montserrat.className}`}>
        <Providers>
          {children} {/* Only render the children without Header, Footer, or ScrollToTop */}
        </Providers>
      </body>
    </html>
  );
}
