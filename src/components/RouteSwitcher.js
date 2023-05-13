import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import App from '../pages/App';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import Nav from './Nav';
import Footer from './Footer';
import ModalCart from './ModalCart';

const RouteSwitcher = () => {
  const [itemCount, setItemCount] = useState(0);

  const products = [
    { id: 1, name: 'seagreen tee', price: 99 },
    { id: 2, name: 'red jacket', price: 197 },
    { id: 3, name: 'yellowgreen pants', price: 131 },
    { id: 4, name: 'brown jacket', price: 195 },
    { id: 5, name: 'grey pants', price: 133 },
    { id: 6, name: 'black jacket', price: 191 },
    { id: 7, name: 'navy pants', price: 151 },
    { id: 8, name: 'gold jacket', price: 999 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const incrementCartItem = (e) => {
    // update item count for nav
    setItemCount((prevState) => {
      return prevState + 1;
    });

    const productID = Number(e.target.parentElement.dataset.id);

    const product = products.filter((product) => {
      return product.id === productID;
    })[0];

    setCartItems((prevState) => {
      // update previous state counts
      let newState = prevState.map((item) => {
        if (item.id === product.id) {
          console.log('match -', item.count, 'item is already in cart');

          const newCount = item.count + 1;

          console.log('new quantity', newCount);

          return { ...item, count: newCount };
        }

        return { ...item };
      });

      return newState;
    });
  };

  const decrementCartItem = (e) => {
    // update item count for nav
    setItemCount((prevState) => {
      return prevState - 1;
    });

    const productID = Number(e.target.parentElement.dataset.id);

    const product = products.filter((product) => {
      return product.id === productID;
    })[0];

    setCartItems((prevState) => {
      // update previous state counts
      let newState = prevState.map((item) => {
        if (item.id === product.id) {
          console.log('match -', item.count, 'item is already in cart');

          const newCount = item.count - 1;

          console.log('new quantity', newCount);

          if (newCount === 0) {
            return null;
          }

          return { ...item, count: newCount };
        }

        return { ...item };
      });

      const filteredState = newState.filter((item) => item !== null);

      return filteredState;
    });
  };

  const addToCart = (e) => {
    const productID = Number(e.target.parentElement.dataset.id);

    const product = products.filter((product) => {
      return product.id === productID;
    })[0];

    console.log('clicked product', product);

    setCartItems((prevState) => {
      let newCartItem = true;

      console.log('prevState', prevState);

      // console.log('!prevState', !prevState);

      // console.log('!!prevState', !!prevState);

      // if cart is empty just add new item to cart
      if (prevState.length === 0) {
        return [...prevState, { ...product, count: 1 }];
      }

      // let quantity = 1;

      // let updatedItem;

      // let newState = [];

      // // iterate over prevState
      // for (const item of prevState) {
      //   // check if item exists in cart
      //   if (item.id === product.id) {
      //     console.log('match -', item.count, 'item is already in cart');

      //     const newCount = item.count + 1;

      //     console.log('new quantity', newCount);

      //     newState.push({ ...item, count: newCount });
      //   } else {
      //     newState.push(item);
      //   }
      // }

      // doesn't add new unique items after the first

      // update previous state counts
      let newState = prevState.map((item) => {
        if (item.id === product.id) {
          console.log('match -', item.count, 'item is already in cart');

          newCartItem = false;

          const newCount = item.count + 1;

          console.log('new quantity', newCount);

          return { ...item, count: newCount };
        }

        return { ...item };
      });

      console.log('new state', newState);

      // if new item is added to cart then add it onto prevState arr
      if (newCartItem) {
        return [...prevState, { ...product, count: 1 }];
      }

      // return the updated new state if added product was multiple
      return newState;

      // return [...prevState, { ...product, count: 1 }];

      // console.log('updatedItem', updatedItem);

      // if (updatedItem) {
      //   console.log('used updated item');
      //   return [...prevState, updatedItem];
      // }

      // return [...prevState, { ...product, count: 1 }];
    });

    // setCartItems((prevState) => {
    //   console.log('prevState', prevState);

    //   let quantity = 1;

    //   let updatedItem;

    //   for (const item of prevState) {
    //     if (item.id === product.id) {
    //       console.log('match');
    //       console.log('item count', item.count);
    //       if (item.count >= 1) {
    //         quantity++;
    //         console.log('new quantity', quantity);
    //         updatedItem = { ...item, count: quantity };
    //       }
    //     }
    //   }

    //   console.log('updatedItem', updatedItem);

    //   if (updatedItem) {
    //     console.log('used updated item');
    //     return [...prevState, updatedItem];
    //   }

    //   return [...prevState, { ...product, count: quantity }];
    // });

    // increment cart total
    setItemCount((prevState) => {
      return prevState + 1;
    });
  };

  /*
  useEffect(() => {
    
    //currently if you leave the page and then navigate back to the 
    //shop page, when you click add to cart the modal won't appear
    //the first time
    
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

    // modal.showModal();

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
  */

  const closeModal = () => {
    const modal = document.querySelector('dialog');
    modal.close();
  };

  return (
    // github pages doesn't support BrowserRouter
    <HashRouter>
      <Nav itemCount={itemCount} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              incrementCartItem={incrementCartItem}
              decrementCartItem={decrementCartItem}
            />
          }
        />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} products={products} />}
        />
      </Routes>
      <ModalCart
        cartItems={cartItems}
        incrementCartItem={incrementCartItem}
        decrementCartItem={decrementCartItem}
        closeModal={closeModal}
      />
      <Footer />
    </HashRouter>
  );
};

export default RouteSwitcher;
