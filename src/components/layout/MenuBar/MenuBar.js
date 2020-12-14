import React from 'react';
import PropTypes from 'prop-types';

import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import {
  IoPersonOutline,
  IoCartOutline,
} from 'react-icons/io5';

import {Link} from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MenuBar.module.scss';

const Component = () => (

  <div className={styles.root}>
    <Container>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <Navbar.Brand >
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <img
              src='/images/logo.png'
              width='50'
              height='50'
              className={styles.logoButton}
              alt='logo'
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>
              <div className={styles.navLink}>
                <IoPersonOutline size='25'/>
                <span>User</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className={styles.navLink}>
                <IoCartOutline size='25'/>
                <span>Cart</span>
              </div>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='warning'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
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
  Component as MenuBar,
  // Container as MenuBar,
  Component as MenuBarComponent,
};
