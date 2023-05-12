import React from 'react';
import '../styles/Shop.css';

const Shop = ({ addToCart, products }) => {
  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product" data-id={product.id} key={product.id}>
              <img src="" alt={product.name} />
              <div>${product.price}</div>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          );
        })}
        {/* <div className="product">
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
        </div> */}
      </div>
    </main>
  );
};

export default Shop;
