
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


// Define the types for the product data
interface Product {
  _id: string;
  image: {
    asset: SanityImageSource; // Assuming product images come as SanityImageSource
  };
  productName: string;
  description: string;
  price: number;
}

// Sanity client and image URL builder setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-08-31",
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // Define the type for products

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch('*[_type == "product"]');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-sm hover:shadow-lg p-4"
          >
            <Link href={`/Products/${product._id}`}>
              <img
                src={urlFor(product.image.asset).width(300).url()}
                alt={product.productName}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{product.productName}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="text-blue-500 font-bold mt-1">₹{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
