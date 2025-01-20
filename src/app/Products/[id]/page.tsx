import { notFound } from "next/navigation";
//import { useState } from "react";

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

// Product Data
const products: Product[] = [
  { id: "1", image: "/Image (1).png", title: "Nike Air Force", price: "₹6,995", description: "Classic sneakers for everyday wear." },
  { id: "2", image: "/Image (10).png", title: "Nike Pegasus Trail", price: "₹9,995", description: "Trail running shoes with comfort." },
  { id: "3", image: "/Rectangle (3).png", title: "Nike Yoga Wear", price: "₹4,995", description: "Perfect yoga wear for workouts." },
  { id: "4", image: "/Rectangle (4).png", title: "Nike Zoom Indestruct", price: "₹8,995", description: "High-performance running shoes." },
  { id: "5", image: "/Rectangle (5).png", title: "Nike Metcon", price: "₹10,995", description: "Comfortable training wear." },
  { id: "6", image: "/Rectangle (6).png", title: "Nike Yoga Wear", price: "₹4,995", description: "Perfect yoga wear for workouts." },
];

// Generate static paths for products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Product Page Component
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    // If the product is not found, return a 404 page
    notFound();
  }

  return (
    <div className="p-6 md:grid md:grid-cols-2">
      <div><img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-lg" /></div>
      <div className="md:pl-8"><h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-blue-500 font-bold mt-2">{product.price}</p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Add to Cart
      </button>
      </div>
    </div>
  );
}


