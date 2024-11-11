import { Product } from "@/types/product";
import Link from "next/link";
import "animate.css/animate.compat.css";

const Single = ({ product, icon }: { product: Product; icon: JSX.Element }) => {
  const { _id, name, shortDescription } = product;
  return (
    <div className="mb-8 w-full">
      <div className="text-center">
        <div className="mb-6 ml-auto mr-auto flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white sm:mb-5 lg:text-xl">
          <Link href={`/products/${_id}`} className="hover:text-primary">
            {name}
          </Link>
        </h3>
        <p className="text-center text-sm font-medium leading-relaxed text-black">
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default Single;
