import React from "react";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types";

const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const Products = async () => {
  const productList = await fetchProducts();

  if (!productList) {
    return null;
  }
  return (
    <div>
      <h3 className=" mx-auto w-full text-4xl font-bold my-4 text-center">Product List</h3>
      <div className=" p-4 w-full h-full grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1400px]  ">
        {productList?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
