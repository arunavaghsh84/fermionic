import Image from "next/image";

const LeadershipSectionFour = () => {
  return (
    <section className="py-6 md:py-8 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:order-2 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Shabaaz N Syed, Director, Custom Layout
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Shabaaz brings with him extensive experience in custom-layout,
                chip-integration of complex SoCs and ICs. He has previously
                worked with Maxlinear, Western-Digital after having a B.Tech
                Degree in Electronics from Sri Dharmasthala Manjunatheshwara
                College of Engineering and Technology,Dharwad. He has worked on
                multi-protocol Serdes, RF-transceivers, High-performance analog
                ICs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSectionFour;
