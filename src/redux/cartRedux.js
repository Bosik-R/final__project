//import Axios from 'axios';

/* selectors */
export const getCart = ({ cart }) => cart;
//{
//  const item = products.data[0];
//  console.log(item);
//  cart.products.push(item);
//
//  try {
//    const storage = localStorage.getItem('cart');
//    console.log(storage);
//    //if(!storage) {
//    //  return cart.products.push(products[0]);
//    //}
//    //else {
//    //  const cartLocal = JSON.parse(storage);
//    //  console.log(cartLocal);
//    //  cart = cartLocal;
//    //}
//  }
//  catch(err) {
//    return null;
//  }
//};


//export const addToCart = ({ cart}, item) => cart.products.push(item);
export const removeFromCart = ({cart}, item) => {
  const index = cart.products.inexOf(item);
  cart.products.splice(index, 1);
};

/* action name creator */
const reducerName = 'cart';

const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const fetchSuccess = payload => ({ payload, type: REMOVE_FROM_CART });

/* thunk creators */
//export const pushToLocalStorage = ({cart}) => {
//  localStorage.setItem('cart', JSON.stringify(cart));
//};
//
//export const getFromLocalStorage = () => {
//
//  try {
//    const storage = localStorage.getItem('cart');
//    if(!storage) return null;
//    else return JSON.parse(storage);
//  }
//  catch(err) {
//    return null;
//  }
//};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(statePart);
      return {
        products: [...statePart.products, action.payload],
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
};
