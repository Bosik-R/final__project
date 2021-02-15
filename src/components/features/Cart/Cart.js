import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCart,
  totalPrice,
  updateLocalStorage} from '../../../redux/cartRedux';
import { order } from '../../../redux/orderRedux';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEuroSign } from 'react-icons/fa';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import { OrderFormOverlay } from '../OrderFormOverlay/OrderFormOverlay';
import { OrderForm } from '../OrderForm/OrderForm';

class Component extends React.Component {
  state = {
    orderFormView: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.cart.products.length !== this.props.cart.products.length) {
      updateLocalStorage(this.props.cart);
    }
  }

  toggleForm() {
    this.setState({orderFormView: !this.state.orderFormView});
  }

  handleOrder() {
    this.toggleForm(true);
  }

  render() {
    const { cart, total, order } = this.props;
    const { orderFormView } = this.state;

    if(cart.products.length){
      return (
        <div className={ styles.root}>
          <Container className={styles.container}>
            <Row>
              <Col xs={{span: '12', order: 'last'}} md={{span: '9', order: 'first'}}>
                {cart.products.map(item =>
                  <CartItem key={item._id} {...item} />
                )}
              </Col>
              <Col xs={{span: '12', order: 'first'}} md={{span: '3', order: 'last'}}>
                <div className={styles.summaryWrapper}>
                  <div className={styles.total}>
                    <span>Total price:</span>
                    <span><FaEuroSign/></span>
                    <span>{total}</span>
                  </div>
                  <button className={styles.order} onClick={() => this.handleOrder()}>ORDER</button>
                  <Link className={styles.continue} to={`${process.env.PUBLIC_URL}/`}>continue shopping</Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs='12' className={styles.orderFormMobile}>
                <OrderForm cart={cart}/>
              </Col>
            </Row>
          </Container>
          {orderFormView ? <OrderFormOverlay cart={cart} toggle={() => this.toggleForm()} /> : null}
        </div>
      );
    } else {
      return (
        <div className={styles.empty}>
          {order._id ?
            <div className={styles.orderSuccess}>
              <h4>Order send Successfully</h4>
              <Link className={styles.orderLink} to={`${process.env.PUBLIC_URL}/orderView`}>
                click here to view your Order
              </Link>
            </div>
            : null
          }
          <h3>Cart empty</h3>
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
  total: PropTypes.number,
  order: PropTypes.object,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  total: totalPrice(state),
  order: order(state),
});

const ContainerCart = connect(mapStateToProps)(Component);

export {
  ContainerCart as Cart,
  Component as CartComponent,
};
