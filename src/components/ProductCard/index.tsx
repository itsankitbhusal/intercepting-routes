import { IProduct } from "@/hooks/useFetchProducts";
import Link from "next/link";
import React from "react";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col h-52">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h2>
        </Link>
        <div className=" h-full">
          <p className="text-sm text-gray-600 line-clamp-4">
            {product.description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
