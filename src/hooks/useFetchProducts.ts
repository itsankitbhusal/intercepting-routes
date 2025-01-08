import { useQuery } from "@tanstack/react-query";

export interface IProductRating {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IProductRating;
}

const fetchProducts = async (): Promise<IProduct[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    })
}