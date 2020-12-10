import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
} from 'react-icons/io5';
import { IconContext } from 'react-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MenuBar.module.scss';

const Component = ({className, children}) => (

  <div className={clsx(className, styles.root)}>
    <Container>
      <Row>
        <Col md='2'>
          <button href='#' className={styles.logoWrapper}>
            <img className={styles.logoImage} src={'/images/Logo.png'} alt='Logo'/>
          </button>
        </Col>
        <Col md='8'>
          <form className={styles.searchWrapper}>
            <div>
              <input type='text' id='serachPrase' name='serachPrase' placeholder='Search product...'/>
              <input type='submit' value='Search' />
            </div>
          </form>
        </Col>
        <Col md='2' className={styles.userMenu}>
          <IconContext.Provider value={{ size: 30}}>
            <a href={'/#'}>
              <IoPersonOutline />

            </a>
            <a href={'/#'} className={styles.iconWrapper}>
              <IoHeartOutline />
              <div>
                <span>0</span>
              </div>
            </a>
            <a href={'/#'} className={styles.iconWrapper}>
              <IoCartOutline />
              <div>
                <span>0</span>
              </div>
            </a>
          </IconContext.Provider>
        </Col>
      </Row>
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
