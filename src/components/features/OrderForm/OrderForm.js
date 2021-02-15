import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendOrderToApi } from '../../../redux/orderRedux';
import { clearLocalStorage } from '../../../redux/cartRedux';
import styles from './OrderForm.module.scss';

const Component = ({ cart, toggle, sendOrder, cleanCart }) => {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: name,
      adress: adress,
      email: email,
      info: info,
      products: cart.products,
    };
    console.log(order);

    sendOrder(order);
    cleanCart();
    cart.products = [];
    toggle();
  };

  return (
    <form className={styles.root} onSubmit={(event) => handleSubmit(event)}>
      <label>Name:</label>
      <input type='text' value={name} placeholder='John Doe' required onChange={(event) => setName(event.target.value)}/>
      <label>Adress:</label>
      <input type='text' value={adress} placeholder='Lincoln Str 32, 4444 Los Angeles' required onChange={(event) => setAdress(event.target.value)}/>
      <label>Email:</label>
      <input type='text' value={email} placeholder='JohnDoe@gmail.com' required onChange={(event) => setEmail(event.target.value)}/>
      <label>Aditional info:</label>
      <textarea value={info} onChange={(event) => setInfo(event.target.value)}/>
      <button type='submit'>send order</button>
    </form>
  );
};

Component.propTypes = {
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  toggle: PropTypes.func,
  sendOrder: PropTypes.func,
  cleanCart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  sendOrder: (order) => dispatch(sendOrderToApi(order)),
  cleanCart: () => dispatch(clearLocalStorage()),
});

const OrderFormMobileContainer = connect(null, mapDispatchToProps)(Component);

export { OrderFormMobileContainer as OrderForm };

