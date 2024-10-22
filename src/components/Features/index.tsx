import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section id="features" className="py-4 md:py-6 lg:py-10">
        <div className="container">
          <SectionTitle
            title="Products"
            paragraph="General Purpose Signal Integrity - ReDrivers/Repeaters ICs"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="text-center">
            <Link
              className="inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
              href="#"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
