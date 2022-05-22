import {
	CART_ADD,
	CART_CLEAR,
	CART_DELETE,
	CART_ERROR,
	CART_REQUEST,
	CART_SUCCESS,
	CART_UPDATE,
	CLOSE_MESSAGE,
	OPEN_MESSAGE,
} from "./constants.js";

const initState = {
	open: false,
	loading: false,
	carts: [],
};

const cartReducer = (state = initState, action) => {
	switch (action.type) {
		case CART_REQUEST:
			return {
				...state,
				loading: true,
			};
		case CART_SUCCESS:
			return {
				...state,
				loading: false,
				carts: action.payload,
			};
		case CART_ERROR:
			return {
				...state,
				loading: false,
			};
		case CART_ADD:
			return {
				...state,
				carts: [...state.carts, action.payload],
			};
		case CART_DELETE:
			return {
				...state,
				carts: state.carts.filter((item) => item.id !== action.payload),
			};
		case CART_UPDATE:
			let newCarts = [...state.carts];
			newCarts.forEach((cart) => {
				if (cart.id === action.payload.id) {
					cart.amount = action.payload.amount;
				}
			});
			return {
				...state,
				carts: newCarts,
			};
		case CART_CLEAR:
			return {
				...state,
				carts: [],
			};
		case OPEN_MESSAGE:
			return {
				...state,
				open: action.payload,
			};
		case CLOSE_MESSAGE:
			return {
				...state,
				open: action.payload,
			};
		default:
			return state;
	}
};

export default cartReducer;
