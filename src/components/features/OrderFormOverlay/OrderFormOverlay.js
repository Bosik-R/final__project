import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderFormOverlay.module.scss';
import { OrderForm } from '../OrderForm/OrderForm';
import useOutsideClick from '../../../utilities/clickOutsideHook';

const Component = ({ cart, toggle }) => {
  const ref = useRef();

  useOutsideClick(ref, () => toggle(false));

  return (
    <div className={styles.root}>
      <div  ref={ref} className={styles.formWrapper}>
        <button className={styles.exit} onClick={() => toggle()}>X</button>
        <OrderForm cart={cart} toggle={toggle}/>
      </div>
    </div>
  );
};

Component.propTypes = {
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  toggle: PropTypes.func,
};

export {Component as OrderFormOverlay};
