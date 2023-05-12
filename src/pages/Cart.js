import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ cartItems, incrementCartItem, decrementCartItem }) => {
  return (
    <div className="cart">
      <h1>Cart</h1>

      <div className="products-container">
        {cartItems.map((item) => {
          return (
            <div className="item">
              <img src="" alt={item.name} />
              <div>${item.price} ea.</div>

              <div className="item-count" data-id={item.id}>
                <button onClick={decrementCartItem}>-</button>
                {item.count}
                <button onClick={incrementCartItem}>+</button>
              </div>

              <div>${item.price * item.count}</div>
            </div>
          );
        })}
      </div>

      <div className="cart-total">
        Cart Total: $
        {cartItems
          .reduce((acc, curr) => {
            return acc + curr.price * curr.count;
          }, 0)
          .toLocaleString()}
      </div>
    </div>
  );
};

export default Cart;
