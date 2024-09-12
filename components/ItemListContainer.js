import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
      {/* Aquí se mapearán los productos */}
    </section>
  );
};

export default ItemListContainer;
