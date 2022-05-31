import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_ERROR,
    CATEGORY_FILTER,
    SEARCH_FILTER,
} from "./constants";

const initState = {
    products: [],
    filters: {
        category: null,
        searchFilter: null,
    },
    fetching: false,
}

const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, fetching: false, products: payload };
      case FETCH_ERROR:
        return { ...state, errMsg: payload };
      case CATEGORY_FILTER:
          return { ...state, fetching: false, filters: {...state.filters, category: payload}}
      case SEARCH_FILTER:
          return { ...state, fetching: false, filters: {...state.filters, searchFilter: payload}}
      default:
        return state;
    }
  };
  
  export default productReducer;