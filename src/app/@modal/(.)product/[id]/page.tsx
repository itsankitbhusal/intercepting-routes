import React from "react";
import { IProduct } from "@/types";
import Modal from "@/components/Modal";

const fetchProductDetail = async (id: number): Promise<IProduct> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

interface IProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: IProps) => {
  const id = (await params).id;

  fetchProductDetail(Number(id) || 1);

  const product = await fetchProductDetail(+id);

  if (!product) {
    return null;
  }

  return (
    <div className=" fixed inset-0 backdrop-blur bg-black bg-opacity-40">
      <Modal product={product} />
    </div>
  );
};

export default page;
