// "use client";

// import React from "react";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { add } from "../redux/cartslice";

// const products = [
//   { id: 1, image: "/Image (1).png", title: "Nike Air Force", price: 6995, description: "Classic sneakers for everyday wear." },
//   { id: 2, image: "/Image (10).png", title: "Nike Pegasus Trail", price: 9995, description: "Trail running shoes with comfort." },
//   { id: 3, image: "/Rectangle (3).png", title: "Nike Yoga Wear", price: 4995, description: "Perfect yoga wear for workouts." },
//   { id: 4, image: "/Rectangle (4).png", title: "Nike Zoom Indestruct", price: 8995, description: "High-performance running shoes." },
//   { id: 5, image: "/Rectangle (5).png", title: "Nike Metcon", price: 10995, description: "Comfortable training wear." },
//   { id: 6, image: "/Rectangle (6).png", title: "Nike Zoom Indestruct", price: 8995, description: "High-performance running shoes." },
// ];

// const ProductPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleAddToCart = (product: any) => {
//     dispatch(add(product));
//     router.push("/cart");
//   };

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <h1 className="text-2xl font-bold mb-6">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border rounded-lg shadow-sm hover:shadow-lg p-4">
//             <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
//             <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
//             <p className="text-gray-600 mt-1">{product.description}</p>
//             <p className="text-blue-500 font-bold mt-1">₹{product.price}</p>
//             <button
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


//////////////////////////////////////////////////////////////////////////////


"use client"

import React from "react";
import { useRouter } from "next/navigation";

const products = [
  { id: "1", image: "/Image (1).png", title: "Nike Air Force", price: 6995, description: "Classic sneakers for everyday wear." },
  { id: "2", image: "/Image (10).png", title: "Nike Pegasus Trail", price: 9995, description: "Trail running shoes with comfort." },
  { id: "3", image: "/Rectangle (3).png", title: "Nike Yoga Wear", price: 4995, description: "Perfect yoga wear for workouts." },
  { id: "4", image: "/Rectangle (4).png", title: "Nike Zoom Indestruct", price: 8995, description: "High-performance running shoes." },
  { id: "5", image: "/Rectangle (5).png", title: "Nike Metcon", price: 10995, description: "Comfortable training wear." },
  { id: "6", image: "/Rectangle (6).png", title: "Nike Zoom Indestruct", price: 8995, description: "High-performance running shoes." },
];

const ProductPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm hover:shadow-lg p-4 cursor-pointer"
            onClick={() => router.push(`/Products/${product.id}`)} // Updated navigation to match folder structure
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="text-blue-500 font-bold mt-1">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
