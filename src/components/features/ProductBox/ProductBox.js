import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { IoEyeOutline, IoCartOutline } from 'react-icons/io5';

import {Link} from 'react-router-dom';

import styles from './ProductBox.module.scss';

const Component = ({ item }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h4>{item.name}</h4>
      <div className={styles.image}>
        <img src={item.images[0]} alt={item.name}/>
      </div>
      <p>{item.description}
        <Link to={`${process.env.PUBLIC_URL}/products/${item._id}`}>more...
        </Link>
      </p>
      <div className={styles.options}>
        {item.oldPrice ? <div className={styles.oldPrice}>${item.oldPrice}</div> : null}
        <div className={styles.price}>Price: ${item.price}</div>
        <Link className={styles.icon} to={`${process.env.PUBLIC_URL}/products/${item._id}`}>
          <IoEyeOutline size='30' />
        </Link>
        <div className={styles.icon}>
          <IoCartOutline size='30' />
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  item: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
