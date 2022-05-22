import {
	CART_ADD,
	CART_CLEAR,
	CART_DELETE,
	CART_REQUEST,
	CART_UPDATE,
	CLOSE_MESSAGE,
	OPEN_MESSAGE,
} from "./constaints";

export const requestCart = () => {
	return {
		type: CART_REQUEST,
	};
};

export const cartAdd = (data) => {
	return {
		type: CART_ADD,
		payload: data,
	};
};

export const cartDelete = (data) => {
	return {
		type: CART_DELETE,
		payload: data,
	};
};

export const cartUpdate = (data) => {
	return {
		type: CART_UPDATE,
		payload: data,
	};
};

export const cartClear = () => {
	return {
		type: CART_CLEAR,
	};
};

export const openMessage = (data) => {
	return {
		type: OPEN_MESSAGE,
		payload: data,
	};
};

export const closeMessage = (data) => {
	return {
		type: CLOSE_MESSAGE,
		payload: data,
	};
};
