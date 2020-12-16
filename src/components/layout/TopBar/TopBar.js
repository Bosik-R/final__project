import React from 'react';

import { FaApple, FaWindows, FaChevronDown } from 'react-icons/fa';
import { MdAndroid } from 'react-icons/md';

import {Container, Row, Col } from 'react-bootstrap';

import Flag from 'react-world-flags';

import styles from './TopBar.module.scss';


const Component = () => {

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col md='3' xs='12' className={styles.promo}>
            <span>FREE SHIPINNG OVER $200</span>
          </Col>
          <Col md='6' xs='12'className={styles.appIcons}>
            <div >
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
          <Col md='3' xs='12'>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export {
  Component as TopBar,
  Component as TopBarComponent,
};
