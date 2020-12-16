import React from 'react';
import PropTypes from 'prop-types';

//import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, getPriceTotal } from '../../../redux/cartRedux';

import { Container, Table } from 'react-bootstrap';

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

import styles from './CartItem.module.scss';

class Component extends React.Component {

  state = {
    qty: 1,
  }

  qtyUp(value) {
    if(value.qty >= 10){
      this.setState({qty: 10});
    }else {
      this.setState({qty: value.qty + 1 });
      console.log(this.state.qty);
    }
  }

  qtyDown(value) {
    if(value.qty <= 0){
      this.setState({qty: 0});
    }else {
      this.setState({qty: value.qty - 1 });
      console.log(this.state.qty);
    }
  }

  getTotal(qty, price){
    const {priceTotal} = this.props;
    console.log('qty', qty, 'price', price);
    priceTotal();

  }

  render(){
    const { item, priceTotal } = this.props;
    const { qty } = this.state;
    const iconSize = 20;
    const total = item.price * qty;


    return (
      <div className={ styles.root}>
        <Container>
          <Table striped bordered hover size="sm">
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
                <td>{item.name}</td>
                <td>
                  <div className={styles.qty}>
                    <div>
                      <FaCaretLeft size={iconSize} onClick={() => this.qtyDown({qty})}/>
                    </div>
                    <div>{qty}</div>
                    <div>
                      <FaCaretRight size={iconSize} onClick={() => this.qtyUp({qty})}/>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{this.getTotal(qty, item.price)}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

Component.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  priceTotal: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  priceTotal: (price) => dispatch(getPriceTotal(price)),
});

const ContainerCartItem = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerCartItem as CartItem,
  Component as CartItemComponent,
};
