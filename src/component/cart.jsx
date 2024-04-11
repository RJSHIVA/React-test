import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 70,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      quantity: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 60,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    }

  ];

  const user = {
    name: 'John Doe',
    address: '123 Main St, Anytown',
    contact: '123-456-7890',
  };

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        {/* User Information */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-1 mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">User Information</h3>
          <div className="mb-2">Name: {user.name}</div>
          <div className="mb-2">Address: {user.address}</div>
          <div>Contact: {user.contact}</div>
        </div>
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center mb-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <p className="text-gray-600">Total: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
