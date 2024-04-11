import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>1234 Example Street</p>
            <p>City, State ZIP</p>
            <p>Country</p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>

          {/* Quotes */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quotes</h3>
            <blockquote className="italic text-gray-400">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </blockquote>
            <blockquote className="italic text-gray-400">
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
