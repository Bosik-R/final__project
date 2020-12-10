export const initialState = {
  products: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};

const searchOptions = [
  {id: '1', name: 'hand tools'},
  {id: '2', name: 'power tools'},
  {id: '3', name: 'motor tools'},
  {id: '4', name: 'cordless power tools'},
];

console.log(searchOptions);
