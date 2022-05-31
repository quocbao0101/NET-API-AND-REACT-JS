import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_ERROR,
    CATEGORY_FILTER,
    SEARCH_FILTER,
} from "./constants";

  
  export const fetchAllProductSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  });
  
  export const fetchError = (error) => ({
    type: FETCH_ERROR,
    payload: error,
  });

  export const categoryFilter = (category) => ({
    type: CATEGORY_FILTER,
    payload: category,
  });

  export const searchFilter = (searchText) => ({
    type: SEARCH_FILTER,
    payload: searchText,
  });