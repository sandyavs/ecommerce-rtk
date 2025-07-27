import React from 'react';
import './ProductList.css'; 

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
            <li key={product.id} className="product-list-item">
                <span>{product.name} - {product.price}</span>
                <button>Add to Cart</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
