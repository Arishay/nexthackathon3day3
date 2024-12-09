import React from "react";
import Header from "../components/Header";
<Header/>
const filters = [
  {
    category: "Store",
    options: ["Sports Bras", "Jackets", "Pants & Tights", "Socks", "Shoes"],
  },
  {
    category: "Gender",
    options: ["Men", "Women", "Kids"],
  },
  {
    category: "Price",
    options: ["Under ₹2,000", "₹2,000 & up"],
  },
];

const products = [
  {
    image: "/Rectangle.png",
    title: "Nike Air Force 1",
    price: "₹8,995",
    description: "Classic sneakers for everyday wear.",
  },
  {
    image: "/Rectangle (1).png",
    title: "Nike Pegasus Trail 3",
    price: "₹10,995",
    description: "Trail running shoes with comfort.",
  },
  {
    image: "/Rectangle (2).png",
    title: "Nike Yoga Tank",
    price: "₹2,995",
    description: "Perfect yoga wear for workouts.",
  },
  {
    image: "/Image (1).png",
    title: "Nike ZoomX Invincible",
    price: "₹15,995",
    description: "High-performance running shoes.",
  },
  {
    image: "/Image (3).png",
    title: "Nike Pro Dri-FIT",
    price: "₹1,995",
    description: "Comfortable training wear.",
  },
  {
    image: "/Rectangle (3).png",
    title: "Nike Air Max 90",
    price: "₹12,995",
    description: "A timeless classic.",
  },
  {
    image: "/Rectangle (4).png",
    title: "Nike Sports Skirt",
    price: "₹4,995",
    description: "Lightweight and comfortable.",
  },
  {
    image: "/Rectangle (5).png",
    title: "Nike Dunk Low",
    price: "₹8,495",
    description: "Iconic basketball shoes.",
  },
  {
    image: "/Rectangle (6).png",
    title: "Nike Air Max 90",
    price: "₹12,995",
    description: "A timeless classic.",
  },
  {
    image: "/Rectangle (7).png",
    title: "Nike Sports Skirt",
    price: "₹4,995",
    description: "Lightweight and comfortable.",
  },
  {
    image: "/Rectangle (8).png",
    title: "Nike Dunk Low",
    price: "₹8,495",
    description: "Iconic basketball shoes.",
  },
  {
    image: "/Rectangle (9).png",
    title: "Nike Dunk Low",
    price: "₹8,495",
    description: "Iconic basketball shoes.",
  },
  {
    image: "/Rectangle.png",
    title: "Nike Air Force 1",
    price: "₹8,995",
    description: "Classic sneakers for everyday wear.",
  },
  {
    image: "/Rectangle (1).png",
    title: "Nike Pegasus Trail 3",
    price: "₹10,995",
    description: "Trail running shoes with comfort.",
  },
  {
    image: "/Rectangle (2).png",
    title: "Nike Yoga Tank",
    price: "₹2,995",
    description: "Perfect yoga wear for workouts.",
  },
  {
    image: "/Image (1).png",
    title: "Nike ZoomX Invincible",
    price: "₹15,995",
    description: "High-performance running shoes.",
  },
  {
    image: "/Image (3).png",
    title: "Nike Pro Dri-FIT",
    price: "₹1,995",
    description: "Comfortable training wear.",
  },
  {
    image: "/Rectangle (3).png",
    title: "Nike Air Max 90",
    price: "₹12,995",
    description: "A timeless classic.",
  },
  {
    image: "/Rectangle (4).png",
    title: "Nike Sports Skirt",
    price: "₹4,995",
    description: "Lightweight and comfortable.",
  },
  {
    image: "/Rectangle (5).png",
    title: "Nike Dunk Low",
    price: "₹8,495",
    description: "Iconic basketball shoes.",
  },
  {
    image: "/Rectangle (6).png",
    title: "Nike Air Max 90",
    price: "₹12,995",
    description: "A timeless classic.",
  },
  {
    image: "/Rectangle (7).png",
    title: "Nike Sports Skirt",
    price: "₹4,995",
    description: "Lightweight and comfortable.",
  },
  {
    image: "/Rectangle (8).png",
    title: "Nike Dunk Low",
    price: "₹8,495",
    description: "Iconic basketball shoes.",
  },
  {
    image: "/Rectangle (9).png",
    title: "Nike Dunk Low",
    price: "₹8,495",
    description: "Iconic basketball shoes.",
  },
];

const Products: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <aside className=" md:block w-1/4 bg-white p-4">
        {filters.map((filter, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-bold mb-2">{filter.category}</h2>
            <ul className="space-y-2">
              {filter.options.map((option, i) => (
                <li
                  key={i}
                  className="text-gray-700 hover:underline cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Product Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-normal">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="font-bold mt-1">{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Products;

