import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Course 1',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet justo id ligula ultrices, at hendrerit metus gravida.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Course 2',
      rating: 5,
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Course 3',
      rating: 4,
      description: 'Sed eget felis eget massa congue accumsan in non ligula. Cras nec libero non nisl condimentum dapibus.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Course 4',
      rating: 3.5,
      description: 'Curabitur auctor, nunc nec luctus ultricies, nisl libero lacinia metus, nec tincidunt nunc ex a nunc.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: 'Course 5',
      rating: 4.5,
      description: 'Sed eget felis eget massa congue accumsan in non ligula. Cras nec libero non nisl condimentum dapibus.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: 'Course 6',
      rating: 4,
      description: 'Curabitur auctor, nunc nec luctus ultricies, nisl libero lacinia metus, nec tincidunt nunc ex a nunc.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 7,
      title: 'Course 7',
      rating: 4.5,
      description: 'Sed eget felis eget massa congue accumsan in non ligula. Cras nec libero non nisl condimentum dapibus.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      title: 'Course 8',
      rating: 4,
      description: 'Curabitur auctor, nunc nec luctus ultricies, nisl libero lacinia metus, nec tincidunt nunc ex a nunc.',
      image: 'https://via.placeholder.com/300',
    }
  ];

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{product.rating}</span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
