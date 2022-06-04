import { REMOVE_PRODUCT, FETCH_PRODUCT, ADD_PRODUCT, GET_PRODUCT_ID } from "./constants";


export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    payload: id,
  });
export const fetchProduct = (data) => ({
    type: FETCH_PRODUCT,
    payload: data,
})

export const addProduct = (data) => ({
  type: ADD_PRODUCT,
  payload: data,
})

export const getProductId = (id) => ({
  type: GET_PRODUCT_ID,
  payload: id,
})