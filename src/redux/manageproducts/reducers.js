import {
    REMOVE_PRODUCT,
    FETCH_PRODUCT,
    ADD_PRODUCT,
    GET_PRODUCT_ID,
} from "./constants";

const initState = {
    products: [],
    filters: {
        category: null,
    },
    fetching: false,
    product: [],
}

const productManageReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case FETCH_PRODUCT:
          return { ...state, fetching: false, products: payload}
      case ADD_PRODUCT:
        const product = state.products.concat(payload);
          return { ...state, fetching: false, products: product}
      case REMOVE_PRODUCT:
        const arrIds = payload;
        const data = state.products.filter(product => !arrIds.includes(product.id));
        return { ...state, fetching: false, products: data };
      case GET_PRODUCT_ID:
        const newData = state.products.find(product => product.id === payload);
        return { ...state, fetching: false, product: newData };
      default:
        return state;
    }
  };
  
  export default productManageReducer;