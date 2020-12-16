import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { CartItem} from '../CartItem/CartItem';
import { CartSummary } from '../CartSummary/CartSummary';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductList.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <CartItem />
    <CartSummary />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductList,
  // Container as ProductList,
  Component as ProductListComponent,
};
