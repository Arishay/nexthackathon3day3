import type { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find((p) => p.id === id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}

