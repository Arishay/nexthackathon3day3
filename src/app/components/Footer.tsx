import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section with Social Icons */}
        <div className="flex justify-between items-center mb-8">
          <div></div> {/* Placeholder for left alignment */}
          <div className="flex space-x-4">
            <a href="/" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaYoutube size={20} />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">Find a Store</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">Become a Member</li>
              <li className="text-gray-400 hover:text-white">Sign Up for Email</li>
              <li className="text-gray-400 hover:text-white">Send Us Feedback</li>
              <li className="text-gray-400 hover:text-white">Student Discounts</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">Order Status</li>
              <li className="text-gray-400 hover:text-white">Delivery</li>
              <li className="text-gray-400 hover:text-white">Returns</li>
              <li className="text-gray-400 hover:text-white">Payment Options</li>
              <li className="text-gray-400 hover:text-white">Contact Us On Nike.com Inquiries</li>
              <li className="text-gray-400 hover:text-white">Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">About Nike</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">News</li>
              <li className="text-gray-400 hover:text-white">Careers</li>
              <li className="text-gray-400 hover:text-white">Investors</li>
              <li className="text-gray-400 hover:text-white">Sustainability</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">Social</h3>
            <p className="text-gray-400">Follow us on our social platforms!</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white px-2 py-1 rounded">India</div>
              <span>© 2023 Nike, Inc. All Rights Reserved</span>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Guides
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Sale
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Nike Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
