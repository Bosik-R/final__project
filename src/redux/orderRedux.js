import Axios from 'axios';
import { API_URL } from '../server';

/* selectors */
export const order = ({ order }) => order.data;

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ORDER = createActionName('FETCH_ORDER');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchOrder = payload => ({ payload, type: FETCH_ORDER });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });


export const sendOrderToApi = (order) => {
  return async (dispatch, getState) => {

    try{
      let res = await Axios.post(`${API_URL}/orders`, {order});
      console.log(res);
      await dispatch(fetchOrder(res.data.newOrder));
    }
    catch(err)  {
      dispatch(fetchError(err.message));
    }
  };
};

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_ORDER: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        error: action.payload,
      };
    }
    default:
      return statePart;
  }
};
