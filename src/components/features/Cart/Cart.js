import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCart,
  totalPrice,
  updateLocalStorage} from '../../../redux/cartRedux';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEuroSign } from 'react-icons/fa';
import { CartItem } from '../CartItem/CartItem';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

class Component extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.cart.products.length !== this.props.cart.products.length) {
      updateLocalStorage(this.props.cart);
    }
  }

  render() {
    const { cart, total } = this.props;

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
                    <span>{total}</span>
                    <FaEuroSign size='20'/>
                  </div>
                  <Link className={styles.order} to={`${process.env.PUBLIC_URL}/order`}>Delivery & Payment</Link>
                  <Link className={styles.continue} to={`${process.env.PUBLIC_URL}/`}>continue shopping</Link>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return <div className={styles.empty}><h3>Cart empty</h3></div>;
    }
  }
}

Component.propTypes = {
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  total: PropTypes.number,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  total: totalPrice(state),
});

const ContainerCart = connect(mapStateToProps)(Component);

export {
  ContainerCart as Cart,
  Component as CartComponent,
};
