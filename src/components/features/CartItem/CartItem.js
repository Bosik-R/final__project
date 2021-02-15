import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  pushQtyIncrease,
  pushQtyDecrease,
  removeFromLocalStorage,
} from '../../../redux/cartRedux';
import { Row, Col } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaEuroSign } from 'react-icons/fa';
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';

const Component = ({
  _id,
  name,
  images,
  price,
  qty,
  removeProduct,
  qtyDecrease,
  qtyIncrease,
}) => {

  return (
    <div className={ styles.root}>
      <Row className={styles.productWrapper}>
        <Col xs='4' md='2' className={styles.image}>
          <img src={images[0]} alt='alt'/>
        </Col>
        <Col xs='8' md='4'>
          <Link className={styles.name} to={`${process.env.PUBLIC_URL}/products/${_id}`}>
            {name}
          </Link>
        </Col>
        <Col xs='4' md='3' className={styles.qty}>
          <button onClick={() => qtyDecrease(_id)}>
            <AiOutlineMinus/>
          </button>
          <div>
            <span>
              {qty}
            </span>
          </div>
          <button onClick={() => qtyIncrease(_id)}>
            <AiOutlinePlus/>
          </button>
        </Col>
        <Col xs='4' md='2' className={styles.price}>
          <div>
            {qty * price}
          </div>
          <FaEuroSign />
        </Col>
        <Col xs='4' md='1'>
          <button  className={styles.remove} onClick={() => removeProduct(_id)}>
            <BsTrash />
          </button>
        </Col>
      </Row>
    </div>
  );
};

Component.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  qty: PropTypes.number,
  qtyIncrease: PropTypes.func,
  qtyDecrease: PropTypes.func,
  removeProduct: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  qtyIncrease: (item) => dispatch(pushQtyIncrease(item)),
  qtyDecrease: (item) => dispatch(pushQtyDecrease(item)),
  removeProduct: (item) => dispatch(removeFromLocalStorage(item)),
});

const CartItemContainer = connect(null, mapDispatchToProps)(Component);

export {
  CartItemContainer as CartItem,
  Component as CartItemComponent,
};
