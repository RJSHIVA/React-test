import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Classes from './component/Classes';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import Login from './component/login';
import SignUp from './component/signup';
import Products from './component/Products';
import Cart from './component/cart';

function App() {
  return (
    <Router>
   

      
      <Routes>
        
        
       
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />





        

   
      </Routes>

      
   
  </Router>
  );
}

export default App;
