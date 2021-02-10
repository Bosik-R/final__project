import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { cartQty, getCart, getFromLocalStorage } from '../../../redux/cartRedux.js';
import { Container, Row, Col} from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io5';
import styles from './MenuBar.module.scss';

class Component extends React.Component {

  componentDidMount(){
    const { cart, pullLocalStorage } = this.props;
    if(cart.products.length === 0) pullLocalStorage();
  }

  render(){
    const { qty } = this.props;
    return (
      <div className={styles.root}>
        <Container>
          <Row className={styles.nav}>
            <Col xs='6'>
              <Link className={styles.image} to={`${process.env.PUBLIC_URL}/`}>
                <img src='/images/logo1.png' alt='logo' />
              </Link>
            </Col>
            <Col xs='6' className={styles.menu}>
              <Link className={styles.cart} to={`${process.env.PUBLIC_URL}/cart`}>
                <IoCartOutline size='45'/>
                <div>
                  <span>{ qty }</span>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Component.propTypes = {
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  pullLocalStorage: PropTypes.func,
  qty: PropTypes.number,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  qty: cartQty(state),
});

const mapDispatchToProps = dispatch => ({
  pullLocalStorage: () => dispatch(getFromLocalStorage()),
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  MenuContainer as MenuBar,
};
