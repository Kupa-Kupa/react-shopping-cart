import React from 'react';
import '../styles/ModalCart.css';

const ModalCart = ({
  cartItems,
  incrementCartItem,
  decrementCartItem,
  closeModal,
}) => {
  return (
    <dialog className="cart-modal">
      <div className="modal-content">
        <h1>Cart</h1>
        <div className="modal-products-container">
          {cartItems.map((item) => {
            return (
              <div className="modal-item">
                <img src="" alt={item.name} />
                <div className="modal-price">
                  <div>${item.price} ea.</div>
                  <div className="item-count" data-id={item.id}>
                    <button onClick={decrementCartItem}>-</button>
                    {item.count}
                    <button onClick={incrementCartItem}>+</button>
                  </div>
                  <div>${item.price * item.count}</div>
                </div>
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
        <button className="close-modal" onClick={closeModal}>
          Close
        </button>
      </div>
    </dialog>
  );
};

export default ModalCart;
