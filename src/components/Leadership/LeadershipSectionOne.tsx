import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const LeadershipSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="leadership" className="pt-6 md:pt-20 lg:pt-8">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-6 dark:border-white/[.15] md:pb-8 lg:pb-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="lg: relative order-1 order-2 mx-auto aspect-[25/24] max-w-[500px] lg:ml-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/gautam_da.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h3 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Gautam Kumar Singh, CEO
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:pb-0">
                Gautam is an accomplished semiconductor professional with
                experience in IC and IP product-design and business creation. He
                has held senior engineering positions at top semiconductor
                product and IP companies in India, driving the
                product-definition and management of business-units responsible
                for designing/architecting the high-speed interconnect
                communication IPs for multiple protocols and high-performance
                clock and data products. He holds an M.Sc(Engg) degree in
                Electronic Design and Technology from Indian Institute of
                Science (IISc, Bangalore) and a B.Tech degree from IIT Varanasi,
                India. Gautam has been part of some of the well known successful
                semiconductor startups from India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSectionOne;
