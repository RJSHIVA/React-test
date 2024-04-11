import React from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons/fa
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './Header';
import Footer from './Footer';
// Hero Section component
const HeroSection = () => {
  return (
    <div className="hero-section bg-gray-800 text-gray py-12 px-4 sm:px-6 lg:px-8">
      {/* Image Slider */}
      <Carousel
       
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000} // Change interval as needed (in milliseconds)
      >
        <div>
          <img src="https://via.placeholder.com/1200x500" alt="Slider 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x500" alt="Slider 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x500" alt="Slider 3" />
        </div>
      </Carousel>

      {/* Slider content */}
      <div className="photo-slider">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg sm:text-xl lg:text-2xl">Explore our services and join us today!</p>
      </div>
    </div>
  );
}

// Top Students Section component
const TopStudentsSection = () => {
  // Dummy data for students (you can replace this with your actual data)
  const studentsData = [
    { id: 1, name: 'John Doe', grade: 'A', image: 'path-to-image' },
    { id: 2, name: 'Jane Smith', grade: 'A+', image: 'path-to-image' },
    { id: 3, name: 'Alice Johnson', grade: 'A-', image: 'path-to-image' },
    { id: 4, name: 'Bob Brown', grade: 'B+', image: 'path-to-image'},
    { id: 5, name: 'Charlie Davis', grade: 'B', image: 'path-to-image'},
    { id: 6, name: 'David Wilson', grade: 'B-', image: 'path-to-image'}
    // Add more student data as needed
  ];

  return (
    <div className="top-students-section bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Top Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {studentsData.map((student) => (
          <div key={student.id} className="student-card bg-white p-6 rounded-lg shadow-md">
            <img src={student.image} alt={student.name} className="w-32 h-32 object-cover rounded mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-600">Grade: {student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reviews Section component
const ReviewsSection = () => {
  // Dummy data for reviews (you can replace this with your actual data)
  const reviewsData = [
    { id: 1, student: 'John Doe', review: 'Excellent tutor!', stars: 5 },
    { id: 2, student: 'Jane Smith', review: 'Very helpful lessons.', stars: 4 },
    { id: 2, student: 'Jane Smith', review: 'Very helpful lessons.', stars: 4 },
    { id: 3, student: 'Alice Johnson', review: 'Great experience!', stars: 5 },
    { id: 3, student: 'Alice Johnson', review: 'Great experience!', stars: 5 },
    { id: 4, student: 'Bob Brown', review: 'Good teacher.', stars: 3 },
    // Add more review data as needed
  ];

  return (
    <div className="reviews-section bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Student Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{review.student}</h3>
            <p className="text-gray-600">{review.review}</p>
            <div className="flex mt-4">
              {[...Array(review.stars)].map((star, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Home Page component combining all sections
const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-page">
      <HeroSection />
      <TopStudentsSection />
      <ReviewsSection />
    </div>
    <Footer />
    </>
  );
}

export default Home;
