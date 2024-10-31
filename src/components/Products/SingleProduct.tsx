import { Product } from "@/types/product";
import Link from "next/link";
import "animate.css/animate.compat.css";

const Single = ({ product, delay }: { product: Product; delay: number }) => {
  const { icon, title, paragraph } = product;
  return (
    <div className="mb-8 w-full">
      <div className="text-center">
        <div className="mb-6 ml-auto mr-auto flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          <Link href="product-details" className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="pr-[10px] text-justify text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Single;
