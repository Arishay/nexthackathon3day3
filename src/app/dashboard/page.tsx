// "use client";

// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { useRouter } from "next/navigation";

// export default function DashboardPage() {
//   const router = useRouter();
//   const cartItems = useSelector((state: RootState) => state.cart);

//   const handleLogout = () => {
//     // Implement logout logic (clear user state, token, etc.)
//     router.push("/login"); // Redirect to login
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//       <h2 className="text-lg font-semibold mb-4">Your Cart Items</h2>
//       {cartItems.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded-lg p-4 bg-white shadow-md"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-32 object-cover rounded-lg"
//               />
//               <h3 className="text-lg font-bold mt-2">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//               <p className="text-blue-500 font-bold mt-1">₹{item.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">Your cart is empty.</p>
//       )}
//     </div>
//   );
// }



///////////////////////////////////////////////////////////////////////////////////


'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useRouter } from 'next/navigation';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const cartItems = useSelector((state: RootState) => state.cart);
  
  if (!user) {
    router.push('/login'); // Redirect if user is not logged in
    return null;
  }

  const orderHistory = [
    {
      id: 1,
      date: '2025-01-01',
      total: '₹10,000',
      items: ['Nike Air Force', 'Nike Yoga Wear'],
    },
    {
      id: 2,
      date: '2025-01-10',
      total: '₹6,000',
      items: ['Nike Pegasus Trail'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* User Details */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">User Details</h2>
        <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Saved Addresses:</strong></p>
        <ul className="list-disc pl-6">
          <li>123 Street, City, Country</li>
          <li>456 Another Street, City, Country</li>
        </ul>
      </div>

      {/* Order History */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Order History</h2>
        {orderHistory.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul className="list-disc pl-6">
            {orderHistory.map((order) => (
              <li key={order.id} className="mb-2">
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Total:</strong> {order.total}
                </p>
                <p>
                  <strong>Items:</strong> {order.items.join(', ')}
                </p>
                <button
                  className="text-blue-500 underline mt-2"
                  onClick={() => router.push(`/orders/${order.id}`)}
                >
                  View Order Details
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cart Items */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-disc pl-6">
            {cartItems.map((item: any, index: number) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>Title:</strong> {item.title}
                </p>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
