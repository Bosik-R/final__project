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

const CartSummaryContainer = connect(mapStateToProps)(Component);

export {
  CartSummaryContainer as CartSummary,
  Component as CartSummaryComponent,
};
