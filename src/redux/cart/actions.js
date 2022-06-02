import {
	CART_ADD,
	CART_CLEAR,
	CART_DELETE,
	CART_UPDATE,
	CART_QTY,
} from "./constants";

export const cartAdd = (data) => {
	return {
		type: CART_ADD,
		payload: data,
	};
};

export const cartQty = (id) => {
	return {
		type: CART_QTY,
		payload: id,
	};
};

export const cartDelete = (data) => {
	return {
		type: CART_DELETE,
		payload: data,
	};
};

export const cartUpdate = ({id, qty}) => {
	return {
		type: CART_UPDATE,
		payload: {id, qty},
	};
};

export const cartClear = () => {
	return {
		type: CART_CLEAR,
	};
};

