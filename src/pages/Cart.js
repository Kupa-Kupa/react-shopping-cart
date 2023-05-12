import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h1>Cart</h1>

      <div className="products-container">
        {cartItems.map((item) => {
          return (
            <div className="item">
              <img src="" alt={item.name} />
              <div>${item.price}</div>
              <div>Quantity: {item.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
