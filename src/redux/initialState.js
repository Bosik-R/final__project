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

  order: {
    data: {},
    error: '',
  },

  cart: {
    products: [],
  },

  languages: [
    {code: 'gb', name: 'English'},
    {code: 'pl', name: 'Polski'},
    {code: 'de', name: 'Deutsch'},
  ],
};
