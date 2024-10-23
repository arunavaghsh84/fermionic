import { Feature } from "@/types/feature";
import Link from "next/link";

const Single = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="mb-8 w-full">
      <div className="wow fadeInUp text-center" data-wow-delay=".15s">
        <div className="mb-6 ml-auto mr-auto flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          <Link href="product-details" className="hover:text-primary">{title}</Link>
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-justify">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Single;
