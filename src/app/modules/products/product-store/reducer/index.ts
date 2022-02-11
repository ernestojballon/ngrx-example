
const loadProductsSuccessReducer = (state, action) => {
  return {
    ...state,
    products: action.products
  };
}
const loadProductsFailureReducer = (state, action) => {
  return {
    ...state,
    error: action.error
  };
}

export default {
  loadProductsSuccessReducer,
  loadProductsFailureReducer
};