//////////////////////////////////////////////////////////////////////

import { notFound } from "next/navigation";
import ClientProductPage from "./ClientProductPage";

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

const products: Product[] = [
  { id: "1", image: "/Image (1).png", title: "Nike Air Force", price: "₹6,995", description: "Classic sneakers for everyday wear." },
  { id: "2", image: "/Image (10).png", title: "Nike Pegasus Trail", price: "₹9,995", description: "Trail running shoes with comfort." },
  { id: "3", image: "/Rectangle (3).png", title: "Nike Yoga Wear", price: "₹4,995", description: "Perfect yoga wear for workouts." },
  { id: "4", image: "/Rectangle (4).png", title: "Nike Zoom Indestruct", price: "₹8,995", description: "High-performance running shoes." },
  { id: "5", image: "/Rectangle (5).png", title: "Nike Metcon", price: "₹10,995", description: "Comfortable training wear." },
  { id: "6", image: "/Rectangle (6).png", title: "Nike Yoga Wear", price: "₹4,995", description: "Perfect yoga wear for workouts." },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <ClientProductPage product={product} />;
}
