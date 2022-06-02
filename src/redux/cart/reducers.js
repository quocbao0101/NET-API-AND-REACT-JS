import {
	CART_ADD,
	CART_CLEAR,
	CART_DELETE,
	CART_QTY,
	CART_UPDATE,
} from "./constants.js";

const initState = {
	open: false,
	loading: false,
	carts: [],
};

const cartReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case CART_ADD:
			return {
				...state,
				carts: [...state.carts, payload],
			};
		
		case CART_DELETE:
			return {
				...state,
				carts: state.carts.filter((item) => item.id !== payload),
			};
		case CART_UPDATE:
			let newCarts = [...state.carts];
			const data = newCarts.map(cart =>  cart.id === payload.id ? 
				{
				  ...cart, qty: payload.qty
				} : cart);
			return {
				...state,
				carts: data,
			}
		case CART_CLEAR:
			return {
				...state,
				carts: [],
			};
		case CART_QTY:
			let newCart = [...state.carts];
			const cart = newCart.map(cart =>  cart.id === payload ? 
				{
					
				  ...cart, qty: Number(cart.qty) + 1
				} : cart);
			return {
				...state,
				carts: cart,
			}
		default:
			return state;
	}
};

export default cartReducer;
