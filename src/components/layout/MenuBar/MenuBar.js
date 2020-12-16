import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';

import { IoCartOutline } from 'react-icons/io5';

import { connect } from 'react-redux';
import { getCart, getFromLocalStorage } from '../../../redux/cartRedux.js';

import styles from './MenuBar.module.scss';

class Component extends React.Component {

  componentDidMount(){
    const { cart, pullLocalStorage } = this.props;
    if(cart.products.length === 0) pullLocalStorage();
  }

  render(){
    const { cart } = this.props;
    return (
      <div className={styles.root}>
        <Container>
          <Row>
            <Col>
              <nav className={styles.nav}>
                <div className={styles.logo}>
                  <Link to={`${process.env.PUBLIC_URL}/`}>
                    <img src='/images/logo.png' alt='logo' />
                  </Link>
                  <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='warning'>Search</Button>
                  </Form>
                </div>
                <Link className={styles.cart} to={`${process.env.PUBLIC_URL}/cart`}>
                  <IoCartOutline size='50'/>
                  <div>
                    <span>{cart.products.length}</span>
                  </div>
                </Link>
              </nav>
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
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  pullLocalStorage: () => dispatch(getFromLocalStorage()),
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  MenuContainer as MenuBar,
};
