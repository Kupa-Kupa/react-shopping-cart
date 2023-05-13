import React, { useEffect } from 'react';
import '../styles/Shop.css';

const Shop = ({ addToCart, products }) => {
  /*
    since the modal is only rendered on the shop page the useEffect
    should appear on the shop page js file
  */
  useEffect(() => {
    const modal = document.querySelector('dialog');

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    const links = document.querySelectorAll('a');

    console.log(links);

    console.log(addToCartButtons);

    const showModal = (e) => {
      console.log('show modal');
      modal.show();
    };

    const closeModal = (e) => {
      console.log('close modal');
      modal.close();
    };

    for (const button of addToCartButtons) {
      button.addEventListener('click', showModal);
    }

    for (const link of links) {
      link.addEventListener('click', closeModal);
    }

    modal.addEventListener(`click`, (e) => {
      console.log(e.target);
    });

    return () => {
      modal.removeEventListener(`click`, (e) => {
        console.log(e.target);
      });

      for (const button of addToCartButtons) {
        button.removeEventListener('click', showModal);
      }

      for (const link of links) {
        link.removeEventListener('click', closeModal);
      }
    };
  });

  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product" data-id={product.id} key={product.id}>
              <img src="" alt={product.name} />
              <div>${product.price}</div>
              <button onClick={addToCart} className="add-to-cart-button">
                Add to Cart
              </button>
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
