import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';

import styles from './CartSummary.module.scss';

class Component extends React.Component {

  render(){
    const {cart} = this.props;
    return (
      <div className={styles.root}>
        <h2>{cart.priceTotal}</h2>
      </div>
    );
  }
}

Component.propTypes = {
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as CartSummary,
  Component as CartSummaryComponent,
};
