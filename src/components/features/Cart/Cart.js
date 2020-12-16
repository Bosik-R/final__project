import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  getCart,
  pushQtyIncrease,
  pushQtyDecrease,
  removeFromLocalStorage,
  updateLocalStorage } from '../../../redux/cartRedux';

import { Container, Table } from 'react-bootstrap';

import { FaCaretLeft, FaCaretRight, FaTrash } from 'react-icons/fa';

import styles from './Cart.module.scss';

class Component extends React.Component {

  state = {
    qty: 10,
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.props.updateStorage(this.props.cart);
    }
  }

  qtyUp(product) {
    if(product.qty >= product.maxAmount){
      alert(`You can only order ${product.maxAmount} pieces in one shipment`);
    } else {
      this.props.qtyIncrease(product);
    }
  }

  qtyDown(product) {
    if(product.qty <= product.minAmount){
      alert(`You have to order at least ${product.minAmount} piece`);
    }else {
      this.props.qtyDecrease(product);
    }
  }

  render(){
    const { cart, removeProduct } = this.props;
    const iconSize = 20;

    if(cart.products.length === 0 ){
      return <div className={styles.empty}><h3>Your cart is empty</h3></div>;
    } else {
      return (
        <div className={ styles.root}>
          <Container>
            {cart.products.map(product => (
              <Table striped bordered hover size="sm" key={product.id}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{product.name}</td>
                    <td>
                      <div className={styles.qty}>
                        <div>
                          <FaCaretLeft size={iconSize} onClick={() => this.qtyDown({...product})}/>
                        </div>
                        <div>{product.qty}</div>
                        <div>
                          <FaCaretRight size={iconSize} onClick={() => this.qtyUp({...product})}/>
                        </div>
                      </div>
                    </td>
                    <td>{product.price}</td>
                    <td>{product.price * product.qty}</td>
                    <td><button className={styles.remove} onClick={() => removeProduct(product)}><FaTrash/></button></td>
                  </tr>
                </tbody>
              </Table>
            ))}
          </Container>
        </div>
      );
    }
  }
}

Component.propTypes = {
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  priceTotal: PropTypes.func,
  qtyIncrease: PropTypes.func,
  qtyDecrease: PropTypes.func,
  removeProduct: PropTypes.func,
  updateStorage: PropTypes.func,
};

const mapStateToProps = state => {
  return(
    {
      cart: getCart(state),
    }
  );
};

const mapDispatchToProps = dispatch => ({
  qtyIncrease: (item) => dispatch(pushQtyIncrease(item)),
  qtyDecrease: (item) => dispatch(pushQtyDecrease(item)),
  removeProduct: (item) => dispatch(removeFromLocalStorage(item)),
  updateStorage: (item) => dispatch(updateLocalStorage(item)),
});

const ContainerCart = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerCart as Cart,
  Component as CartComponent,
};
