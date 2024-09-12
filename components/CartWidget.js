import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;