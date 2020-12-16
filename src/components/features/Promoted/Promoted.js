import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Promoted.module.scss';

const Component = () => {

  return (
    <div className={styles.root}>
      <Carousel
        fade={true}
        nextIcon={<FontAwesomeIcon color='black' size='2x' icon={ faChevronRight }/>}
        prevIcon={<FontAwesomeIcon color='black' size='2x' icon={ faChevronLeft }/>}
      >
        <Carousel.Item as='div'>
          <div className={styles.carousel}>
            <div className={styles.imageWrapper}>
              <img src={'/images/carousel/image1.png'} alt='image1'/>
              <div className={styles.deal}>
                <div>
                  <h2>BEST</h2>
                  <h2>DEAL</h2>
                </div>
              </div>
              <h4>Now 50% Off</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus ultricies eros non dapibus. Donec elementum rhoncus nisl. Aliquam erat volutpat.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item as='div'>
          <div className={styles.carousel}>
            <div className={styles.imageWrapper}>
              <img src={'/images/carousel/image2.png'} alt='image1'/>
              <div className={styles.deal}>
                <div>
                  <h2>BEST</h2>
                  <h2>DEAL</h2>
                </div>
              </div>
              <h4>Now 50% Off</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus ultricies eros non dapibus. Donec elementum rhoncus nisl. Aliquam erat volutpat.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item as='div'>
          <div className={styles.carousel}>
            <div className={styles.imageWrapper}>
              <img src={'/images/carousel/image3.png'} alt='image1'/>
              <div className={styles.deal}>
                <div>
                  <h2>BEST</h2>
                  <h2>DEAL</h2>
                </div>
              </div>
              <h4>Now 50% Off</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus ultricies eros non dapibus. Donec elementum rhoncus nisl. Aliquam erat volutpat.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Promoted,
  Component as PromotedComponent,
};
