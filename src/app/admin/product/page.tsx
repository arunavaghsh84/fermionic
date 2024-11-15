"use client";
import React, { useState } from "react";
import AdminLayout from "@/app/adminLayout/layout";
import AddProductForm from "@/components/AddProduct/AddProductForm";
import ProductList from "@/components/AddProduct/ProductList";

const ProductManage = () => {
  const [productForm, setProductForm] = useState<boolean>(false);

  const handleProductForm = () => {
    setProductForm(!productForm);
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between gap-5 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-semibold text-dark dark:text-white">
          Product
        </h2>
        <button
          onClick={handleProductForm}
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          Add Product
        </button>
      </div>
      {productForm ? (
        <AddProductForm handleProductForm={handleProductForm} />
      ) : (
        <ProductList handleProductForm={handleProductForm} />
      )}
    </AdminLayout>
  );
};

export default ProductManage;
