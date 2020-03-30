import React from 'react';
import './Products.scss';
const Products = ({ isCurrentPage }) => {
  return (
    <div>
      <div className='productspage'>
        <div className='box1'>
          <h1
            className={`cubeside-pagetitle ${isCurrentPage &&
              'pagetitle-active'}`}
          >
            Products
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
