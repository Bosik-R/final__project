import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { FaEuroSign } from 'react-icons/fa';
import styles from './ProductBox.module.scss';

const Component = ({ item }) => {

  return (
    <div className={styles.root}>
      <Link className={styles.link} to={`${process.env.PUBLIC_URL}/products/${item._id}`}>
        <div className={styles.wrapper}>
          <h4>{item.name}</h4>
          <div className={styles.image}>
            <img src={item.images[0]} alt={item.name}/>
          </div>
          <p>{item.description}</p>
          <div className={styles.priceWrapper}>
            <span>Price</span>
            <FaEuroSign />
            {item.oldPrice ? <span className={styles.oldPrice}>{item.oldPrice}</span> : null}
            <span>{item.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

Component.propTypes = {
  item: PropTypes.object,
};


export {
  Component as ProductBox,
};
