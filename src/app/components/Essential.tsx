import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 ">
      {/* Icons Section */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Icons</h2>
        <ul className="space-y-1">
          <li className="text-gray-600">Air Force 1</li>
          <li className="text-gray-600">Huarache</li>
          <li className="text-gray-600">Air Max 90</li>
          <li className="text-gray-600">Air Max 95</li>
        </ul>
      </div>

      {/* Shoes Section */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Shoes</h2>
        <ul className="space-y-1">
          <li className="text-gray-600">All Shoes</li>
          <li className="text-gray-600">Custom Shoes</li>
          <li className="text-gray-600">Jordan Shoes</li>
          <li className="text-gray-600">Running Shoes</li>
        </ul>
      </div>

      {/* Clothing Section */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Clothing</h2>
        <ul className="space-y-1">
          <li className="text-gray-600">All Clothing</li>
          <li className="text-gray-600">Modest Wear</li>
          <li className="text-gray-600">Hoodies & Pullovers</li>
          <li className="text-gray-600">Shirts & Tops</li>
        </ul>
      </div>

      {/* Kids Section */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Kids</h2>
        <ul className="space-y-1">
          <li className="text-gray-600">Infant & Toddler Shoes</li>
          <li className="text-gray-600">Kids Shoes</li>
          <li className="text-gray-600">Kids Jordan Shoes</li>
          <li className="text-gray-600">Kids Basketball Shoes</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Menu;
