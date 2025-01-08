import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";

interface IProps {
  product: IProduct;
}

const ProductDetail = ({ product }: IProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
            className="max-w-full h-auto rounded shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

          {/* Price */}
          <p className="text-xl text-green-600 font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            ⭐ {product.rating.rate}
            <span className="ml-2 text-gray-600">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Category */}
          <p className="text-sm text-gray-500 mb-6">
            Category: {product.category}
          </p>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
