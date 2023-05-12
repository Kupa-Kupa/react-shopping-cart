import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <Link to="/">
        <div>Shop Shop</div>
      </Link>
      <div className="links">
        <Link to="/shop">Shop</Link>
        <span>
          <Link to="/cart">Items in Cart:</Link>
          <span className="cart-items-number">{props.itemCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
