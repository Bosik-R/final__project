//import Axios from 'axios';

/* selectors */
export const getCart = ({ cart }) => cart;
export const getCartProducts = ({ cart }) => cart.products;

//export const removeFromCart = ({cart}, item) => {
//  const index = cart.products.inexOf(item);
//  cart.products.splice(index, 1);
//};

/* action name creator */
const reducerName = 'cart';

const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
//const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const QTY_INCREASE = createActionName('QTY_INCREASE');
const QTY_DECREASE = createActionName('QTY_DECREASE');
const STORAGE_TO_STATE = createActionName('STORAGE_TO_STATE');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const pushQtyIncrease = payload => ({ ...payload, type: QTY_INCREASE});
export const pushQtyDecrease = payload => ({ payload, type: QTY_DECREASE});
export const getLocalStorage = payload => ({ payload, type: STORAGE_TO_STATE});


/* thunk creators */

export const getFromLocalStorage = () => {
  let storage = {};

  return (dispatch)=> {
    try {
      storage = JSON.parse(localStorage.getItem('cart'));
      if(storage.products !== null) {
        const data = storage.products;
        dispatch(getLocalStorage(data));
      } else {
        return [];
      }
    }
    catch(err) {
      console.log(err);
    }
  };
};

export const pushToLocalStorage = ( cart ) => {
  return () => {
    try {
      const storage = JSON.parse(localStorage.getItem('cart'));
      console.log(storage);
      if(storage === null){
        const data = {
          products: [cart],
        };
        localStorage.setItem('cart', [JSON.stringify(data)]);
      }else{
        storage.products.push(cart);
        localStorage.setItem('cart', [JSON.stringify(storage)]);
      }
    }
    catch(err) {
      console.log(err);
    }
  };
};


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        products: [...statePart.products, action.payload],
      };
    }
    case STORAGE_TO_STATE: {
      console.log(action.payload);
      console.log(statePart.products);
      return {
        products: statePart.products.length === 0 ? action.payload : [...statePart.products],
      };
    }
    case QTY_INCREASE: {
      return {
        ...statePart,
        products: [statePart.products.map(item => {
          if(item.id === action.payload.product.id){
            return {
              qty: action.payload.product.qty + 1,
              totalPrice: action.payload.product.price * item.qty,
              ...item,
            };
          }else{
            return (
              {...item}
            );
          }
        },)],
      };
    }
    case QTY_DECREASE: {
      return {
        ...statePart,
        products: [statePart.products.map(item => {
          if(item.id === action.payload.product.id){
            return {
              qty: action.payload.product.qty - 1,
              totalPrice: action.payload.product.price * item.qty,
              ...item,
            };
          }else{
            return (
              {...item}
            );
          }
        },)],
      };
    }
    //case REMOVE_FROM_CART: {
    //  return {
    //    ...statePart,
    //    loading: {
    //      active: false,
    //      error: false,
    //    },
    //    data: action.payload,
    //  };
    //}
    default:
      return statePart;
  }
};
