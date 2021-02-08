/* selectors */
export const getCart = ({ cart }) => cart;

export const totalPrice = ({ cart }) => {
  let total = 0;
  let price = 0;
  cart.products.forEach(item => {
    price = item.price * item.qty;
    total = total + price;
  });
  return total;
};

/* action name creator */
const reducerName = 'cart';

const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const QTY_INCREASE = createActionName('QTY_INCREASE');
const QTY_DECREASE = createActionName('QTY_DECREASE');
const STORAGE_TO_STATE = createActionName('STORAGE_TO_STATE');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const pushQtyIncrease = payload => ({ payload, type: QTY_INCREASE});
export const pushQtyDecrease = payload => ({ payload, type: QTY_DECREASE});
export const getLocalStorage = payload => ({ payload, type: STORAGE_TO_STATE});
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART});


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

export const removeFromLocalStorage = ( _id ) => {
  return (dispatch) => {
    try {
      const storage = JSON.parse(localStorage.getItem('cart'));
      const product = storage.products.map(item => item._id === _id);
      console.log(product);

      storage.products.splice((storage.products.indexOf(product)), 1);
      localStorage.clear('cart');
      localStorage.setItem('cart', [JSON.stringify(storage)]);
      dispatch(removeFromCart(_id));
    }

    catch(err) {
      console.log(err);
    }
  };
};

export const updateLocalStorage = ( cart ) => {
  return () => {
    try {
      localStorage.clear('cart');
      localStorage.setItem('cart', [JSON.stringify(cart)]);
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
      return {
        products: statePart.products.length === 0 ? action.payload : [...statePart.products],
      };
    }
    case QTY_INCREASE: {
      return {
        products: statePart.products.map(item => {
          if(item._id === action.payload){
            item.qty = item.qty + 1;
            return item;
          }else{
            return (
              {...item}
            );
          }
        },),
      };
    }
    case QTY_DECREASE: {
      return {
        products: statePart.products.map(item => {
          if(item._id === action.payload){
            item.qty = item.qty - 1;
            return item;
          }else{
            return (
              {...item}
            );
          }
        },),
      };
    }
    case REMOVE_FROM_CART: {
      console.log(action.payload);
      return {
        products: statePart.products.filter(item => item._id !== action.payload),
      };
    }
    default:
      return statePart;
  }
};
