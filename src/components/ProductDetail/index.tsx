import { IProduct } from "@/types";
import React from "react";

interface IProps {
  product: IProduct;
}

const ProductDetail = ({ product }: IProps) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, idx) => (
            <span key={`full-${idx}`} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
        {halfStar && <span className="text-yellow-500 text-lg">☆</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, idx) => (
            <span key={`empty-${idx}`} className="text-gray-300 text-lg">
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
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
            {renderStars(product.rating.rate)}
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
