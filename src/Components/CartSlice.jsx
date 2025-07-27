import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: []
}
const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) { //adds item to the cart
			console.log(action.payload)
			const existingItem = state.cartItems.find(
				item => item.id === action.payload.id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.cartItems.push({ ...action.payload.id, quantity: 1 });
			}
		},
		removeItemFromCart(state, action) { //removes an item from cart
			console.log(JSON.parse(JSON.stringify(state.cartItems)));
			state.cartItems = state.cartItems.filter(
				item => item.id !== action.payload);
		},
		clearCart(state) { //clears the entire cart
			state.cartItems = [];
		},
		increaseItemQuantity(state, action) { //incr qty of item in the cart
			const itemToIncrease = state.cartItems.find(
				item => item.id === action.payload
			);
			if(itemToIncrease) {
				itemToIncrease.quantity += 1;
			}
		},
		decreaseItemQuantity(state, action) { //decr qty of item from the cart
			const itemToDecrease = state.cartItems.find(
				item => item.id === action.payload
			);
			if(itemToDecrease && itemToDecrease.quantity > 1) {
				itemToDecrease.quantity -= 1;
			}
		}
	}
});

export const {
	addItemToCart,
	removeItemFromCart,
	clearCart,
	increaseItemQuantity,
	decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;


