"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";
import ViewMore from "./viewMore";

const Products = () => {
  const [currentPath, setCurrentPath] = useState<string>("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");

    if (res.ok) {
      const data = await res.json();
      setProducts(data);
    } else {
      console.error("Error fetching products");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname || "");
    }
  }, []);

  return (
    <>
      <section id="Products" className="py-6 lg:py-10 min-h-96">
        <div className="container">
          {currentPath === "/" && (
            <SectionTitle
              title="Products"
              paragraph="General Purpose Signal Integrity - ReDrivers/Repeaters ICs"
              center
            />
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((product) => product.isFeatured)
              .map((product, index) => (
                <SingleProduct
                  key={product._id}
                  product={product}
                  icon={productsData[index].icon}
                />
              ))}
          </div>
          <ViewMore />
        </div>
      </section>
    </>
  );
};

export default Products;
