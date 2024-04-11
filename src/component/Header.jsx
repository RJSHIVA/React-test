import React from 'react';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import Classes from './Classes'

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white hover:text-gray-900">
  Karo Abhyaas
</a>

        {/* Navigation */}
        <nav className="space-x-5">
          <button onClick='/join' className=" bg-black hover:bg-black-600 text-white px-5 py-2 rounded">
            Join
          </button>
          <a href="/classes" className="text-gray-600 hover:text-gray-900">
  Classes
</a>

          <a href="products" className="text-gray-600 hover:text-gray-900">
            Products
          </a>
          <a href="AboutUs" className="text-gray-600 hover:text-gray-900">
            About us
          </a>
        </nav>
        <a href="login" className="w-auto text-gray-600 hover:text-gray-900">
          <CgProfile style={{ width: '24px', height: '24px' }} />
        </a>
        <a href="Cart" className="w-auto text-gray-600 hover:text-gray-900">
          <FaShoppingCart style={{ width: '24px', height: '24px' }} />
        </a>
      </div>
    </div>
  );
}

export default Header;
