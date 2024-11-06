// MinimalLayout.tsx
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {children} {/* Only render the children without Header, Footer, or ScrollToTop */}
        </Providers>
      </body>
    </html>
  );
}
