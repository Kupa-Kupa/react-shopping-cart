import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import App from '../pages/App';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import Nav from './Nav';
import Footer from './Footer';

const RouteSwitcher = () => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = () => {
    setItemCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    // github pages doesn't support BrowserRouter
    <HashRouter>
      <Nav itemCount={itemCount} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default RouteSwitcher;
