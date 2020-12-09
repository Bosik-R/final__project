import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
  IoChevronDown,
} from 'react-icons/io5';
import { IconContext } from 'react-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './UserPanel.module.scss';

const searchOptions = [
  {id: '1', name: 'hand tools'},
  {id: '2', name: 'power tools'},
  {id: '3', name: 'motor tools'},
  {id: '4', name: 'cordless power tools'},
];

const Component = ({className, children}) => (

  <div className={clsx(className, styles.root)}>
    <Container>
      <Row>
        <Col md='2'>
          <button href='#' className={styles.logoWrapper}>
            <img className={styles.logoImage} src={'/images/Logo.png'} alt='Logo'/>
            <div className={styles.logoTitle}>
              <span>HANDY</span>
              <span>MAN</span>
            </div>
          </button>
        </Col>
        <Col md='8'>
          <form className={styles.searchWrapper}>
            <div>
              <select id='category'>
                {searchOptions.map(option => (
                  <option key={option.id}>{option.name}</option>
                ))}
              </select>
              <IoChevronDown className={styles.selectArrow} />
              <input type='text' id='serachPrase' name='serachPrase' placeholder='Search product...'/>
              <input type='submit' value='Search' />
            </div>
          </form>
        </Col>
        <Col md='2' className={styles.userPanel}>
          <IconContext.Provider value={{ size: 30}}>
            <a href={'#'}>
              <IoPersonOutline />

            </a>
            <a className={styles.iconWrapper}>
              <IoHeartOutline />
              <div>
                <span>0</span>
              </div>
            </a>
            <a className={styles.iconWrapper}>
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
  Component as UserPanel,
  // Container as UserPanel,
  Component as UserPanelComponent,
};
