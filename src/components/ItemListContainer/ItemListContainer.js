import React from 'react';
import Item from '../Item/Item';
import './itemListContainer.css';
import { products } from './products';

const ItemListContainer = ({ category }) => {
  const filteredProducts = category ? products.filter(prod => prod.category === category) : products;
  return (
    <div className='item-list-container'>
      {filteredProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
