import React from 'react';
import PropTypes from 'prop-types';

import { FaApple, FaWindows, FaChevronDown } from 'react-icons/fa';
import { MdAndroid } from 'react-icons/md';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './TopNav.module.scss';

import Flag from 'react-world-flags';


const Component = () => {

  return (

    <div className={styles.root}>
      <Container>
        <Row>
          <Col md='9' xs='12' >
            <div className={styles.promo}>
              <span>FREE SHIPINNG OVER $200</span>
              <span>|</span>
              <span>Download App</span>
              <button className={styles.icon__button}>
                <FaApple className={styles.icon}/>
              </button>
              <button className={styles.icon__button}>
                <MdAndroid className={styles.icon} />
              </button>
              <button className={styles.icon__button}>
                <FaWindows className={styles.icon} />
              </button>
            </div>
          </Col>
          <div className='col-md-3'>
            <Row>
              <div className={styles.currency}>
                <button className={styles.button}>
                  <Flag code='gb' height='12' />
                  <span className={styles.button_title}>English</span>
                  <FaChevronDown />
                </button>
                <button className={styles.button}>
                  <span className={styles.button_title}>USD</span>
                  <FaChevronDown />
                </button>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

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
  Component as TopNav,
  // Container as TopNav,
  Component as TopNavComponent,
};
