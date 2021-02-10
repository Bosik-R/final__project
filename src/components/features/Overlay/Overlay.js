import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import styles from './Overlay.module.scss';

const Overlay = ({ name, images, imageIndex, toggle}) => {
  const [index, setIndex] = useState(imageIndex);

  const handlePrev = () => {
    if(index === 0) {
      setIndex(images.length - 1);
    }else{
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if(index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className={styles.overlay}>
      <button className={styles.exit} onClick={() => toggle()}>X</button>
      <button className={styles.prev} onClick={() => handlePrev()}><IoChevronBack/></button>
      <div className={styles.imageSlider}>
        <img src={images[index]} alt={name}/>
      </div>
      <button className={styles.next} onClick={() => handleNext()}><IoChevronForward/></button>
    </div>
  );
};

Overlay.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  imageIndex: PropTypes.number,
  toggle: PropTypes.func,
};

export default Overlay;
