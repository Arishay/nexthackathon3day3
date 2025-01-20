'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import jordan from '../../../public/Vector.png';
import nike from '../../../public/Vector (1).png';
import Link from 'next/link';
import {useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
export default function Header() {

const item = useSelector((state:RootState) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <header className="bg-white shadow-md">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-custom-gray sm:px-6">
        {/* Jordan Logo */}
        <Link href="/">
        <Image src={jordan} alt="Jordan Logo" className="w-6 h-6" />
        </Link>
        {/* Desktop Links */}
        <div className="hidden sm:flex gap-4 text-xs font-medium">
          <Link href="/Products" className="hover:underline">
            Find a Store
          </Link>
          <Link href="/" className="hover:underline">
            Help
          </Link>
          <Link href="/" className="hover:underline">
            Join Us
          </Link>
          <Link href="/" className="hover:underline">
            Sign In
          </Link>
        </div>

        {/* Hamburger Icon */}
         <button
          className="sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button> 
      </div>

      {/* Main Navigation */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex sm:items-center sm:justify-between px-4 py-4 sm:px-6`}
      >
        {/* Logo */}
<Link href="/">
        <div className="flex justify-between items-center py-3 w-12 sm:py-0">
          <Image src={nike} alt="Nike Logo" className="w-12 sm:w-12" />
        </div>
        </Link>
        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
          {['New & Featured', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS'].map(
            (item) => (
              <Link
                key={item}
                href="/Products"
                className="px-4 py-2 text-center hover:bg-gray-100 rounded-md transition duration-150 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Search Box */}
        <div className="mt-4 sm:mt-0 w-full sm:w-44">
          <div className="flex items-center bg-gray-100 h-10 rounded-full px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5a6 6 0 016 6m-6 6a6 6 0 01-6-6 6 6 0 016-6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-transparent text-sm text-gray-700 focus:outline-none pl-2"
            />
          </div>
        </div>
        <Link href="/cart"><FiShoppingCart className="text-2xl cursor-pointer mr-2" /></Link>
        {item.length}
        <FiUser className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
}


