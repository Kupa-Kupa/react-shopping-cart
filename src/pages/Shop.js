import React from 'react';
import '../styles/Shop.css';

const Shop = ({ addToCart }) => {
  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="products-container">
        <div className="product">
          <img src="" alt="Product" />
          <div>$99</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$197</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$131</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$197</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$131</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$197</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$131</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src="" alt="Product" />
          <div>$197</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </main>
  );
};

export default Shop;
