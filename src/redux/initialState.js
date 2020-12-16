export const initialState = {
  products: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
  categories: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    priceTotal: 0,
    products: [],
  },
};
