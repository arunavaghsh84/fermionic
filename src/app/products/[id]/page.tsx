"use client";

import GetDocumentBox from "@/components/Products/GetDocumentBox";
import RootLayout from "@/app/defaultLayout/layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await fetch(`/api/products/${id}`);

    if (response.ok) {
      const data = await response.json();
      setProduct(data.product);
    } else {
      console.error("Error fetching product");
    }
  };

  return (
    <RootLayout>
      <section className="pb-8 pt-[120px]">
        <div className="container">
          {product && (
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2 className="sm:2xl mb-2 text-2xl font-semibold text-dark dark:text-white sm:mb-4 md:text-3xl">
                    {product.name}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: product.details }} />
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                <GetDocumentBox product={product} />
              </div>
            </div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default ProductDetailsPage;
