import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto my-8">
      <div className="flex flex-wrap -mx-4">
        {/* Card 1 */}
        <div className="w-full lg:w-1/2 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-1/2 overflow-hidden">
              <img
                src="https://via.placeholder.com/400"
                alt="Placeholder"
                className="w-full h-auto"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2 p-4">
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600 mb-4">
                Some description text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Read More</a>
            </div>
          </div>
        </div>

        {/* Card 2 (similar structure as Card 1) */}
        <div className="w-full lg:w-1/2 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-1/2 overflow-hidden">
              <img
                src="https://via.placeholder.com/400"
                alt="Placeholder"
                className="w-full h-auto"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2 p-4">
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600 mb-4">
                Some description text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
}

export default AboutUs;
