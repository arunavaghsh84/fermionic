import Image from "next/image";
import { Metadata } from "next";
import GetDocumentBox from "@/components/Products/GetDocumentBox";
import RootLayout from "@/app/defaultLayout/layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Details",
  // description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <RootLayout>
      <section className="pb-8 pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="sm:2xl mb-2 text-2xl font-semibold text-dark dark:text-white sm:mb-4 md:text-3xl">
                  Signal Integriity IC
                </h2>
                <div>
                  <p className="mb-6 text-sm leading-relaxed text-black dark:text-white">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative w-full">
                      <Image
                        src="/images/products/Redriver_use.webp"
                        alt="image"
                        width={1024}
                        height={320}
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-black dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper{" "}
                    <strong className="text-primary dark:text-white">
                      malesuada
                    </strong>{" "}
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-black dark:text-white">
                    Semper auctor neque vitae tempus quam pellentesque nec.{" "}
                    <Link
                      href="#"
                      className="text-primary underline dark:text-white"
                    >
                      Amet dictum sit amet justo
                    </Link>{" "}
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className="font-xl mb-10 font-semibold leading-tight text-black dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-black dark:text-white">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-black dark:text-white">
                    <li className="mb-2">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="mb-2">Mattis vulputate cupidatat.</li>
                    <li className="mb-2">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="mb-2">Ligula ullamcorper malesuada proin</li>
                  </ul>
                  <p className="mb-6 text-sm leading-relaxed text-black dark:text-white">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default BlogDetailsPage;
