import React from 'react';
import PropTypes from 'prop-types';

//import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, pushQtyIncrease, pushQtyDecrease } from '../../../redux/cartRedux';

import { Container, Table } from 'react-bootstrap';

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

import styles from './Cart.module.scss';

class Component extends React.Component {

  state = {
    qty: 10,
  }

  qtyUp(product) {
    if(product.qty >= product.maxAmount){
      alert(`You can only order ${product.maxAmount} pieces in one shipment`);
    } else {
      //      const q = product.qty + 1;
      //      const p = product.price * q;
      //
      //      this.props.cart.products.map(item => {
      //        if(item.id === product.id){
      //          item.qty = q;
      //          item.totalPrice = p;
      //        }else{
      //          return {...item};
      //        }
      //        console.log(item);
      //      });

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

  getTotal(qty, price){
    console.log('qty', qty, 'price', price);
  }

  render(){
    const { cart } = this.props;
    const iconSize = 20;


    if(cart.products.length === 0 ){
      return <div><h3>Your cart is empty</h3></div>;
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
};

const mapStateToProps = state => {
  console.log(state);
  return(
    {
      cart: getCart(state),
    }
  );
};

const mapDispatchToProps = dispatch => ({
  qtyIncrease: (item) => dispatch(pushQtyIncrease(item)),
  qtyDecrease: (item) => dispatch(pushQtyDecrease(item)),
});

const ContainerCart = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerCart as Cart,
  Component as CartComponent,
};
