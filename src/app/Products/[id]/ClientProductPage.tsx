"use client";

import { useDispatch } from "react-redux";
import { add } from "../../redux/cartslice";

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function ClientProductPage({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ ...product, id: Number(product.id), price: Number(product.price) }));
    alert("Product added to cart!");
  };

  return (
    <div className="p-6 md:grid md:grid-cols-2 gap-6">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="md:pl-8">
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-blue-500 font-bold mt-2">{product.price}</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
