import React from 'react';// Import hooks from React Redux
import { useDispatch, useSelector } from 'react-redux'; //// Import the CSS file for styling
import { addItemToCart } from './CartSlice'; // Action creator
import './ProductList.css'; // CSS styles

const ProductList = () => { // Initialize the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Access the current cart items from global Redux state
  const cartItems = useSelector(state => state.cart.cartItems);

  // Sample list of products
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Dispatch action to add product to cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id); // Check if product is already in cart

          return (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button
                className={`add-to-cart-btn ${isAlreadyInCart ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Disable button if already added
              >
                {isAlreadyInCart ? 'Added' : 'Add to Cart'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;