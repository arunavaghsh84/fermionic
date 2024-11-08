import { Product } from "@/types/product";
import Link from "next/link";
import "animate.css/animate.compat.css";

const Single = ({ product }: { product: Product }) => {
  const { icon, title, paragraph } = product;
  return (
    <div className="mb-8 w-full">
      <div className="text-center">
        <div className="mb-6 ml-auto mr-auto flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-3 sm:mb-5 text-lg font-semibold text-dark dark:text-white lg:text-xl">
          <Link href="product-details" className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="text-center text-sm font-medium leading-relaxed text-black">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Single;
