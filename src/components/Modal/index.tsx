"use client";
import React from "react";
import ProductDetail from "../ProductDetail";
import { useRouter } from "next/navigation";
import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}

const Modal = ({ product }: IProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className=" relative max-w-[50vw] mx-auto h-screen grid place-items-center">
      <div className=" flex bg-white p-4 rounded-2xl bg-opacity-80">
        <ProductDetail key={product.id} product={product} />
        <div
          className=" h-16 w-16 rounded-xl grid place-items-center cursor-pointer select-none bg-blue-400"
          onClick={handleBack}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default Modal;
