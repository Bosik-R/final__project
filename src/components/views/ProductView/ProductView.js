import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProductByID, fetchProductById, getAllProducts, getLoadingState } from '../../../redux/productsRedux';
import { addToCart, pushToLocalStorage } from '../../../redux/cartRedux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import { IoChevronBack, IoChevronForward, IoCartOutline } from 'react-icons/io5';


import styles from './ProductView.module.scss';


class Component extends React.Component {

  state = {
    imageIndex: 0,
    overlay: false,
  }

  componentDidMount(){
    const {fetchProductByIdApi} = this.props;

    fetchProductByIdApi(this.props.match.params.id);

  }

  handleImage(img) {
    const  index = this.props.product.images.indexOf(img);
    this.setState({imageIndex: index});
  }

  toggleOverlay() {
    this.setState({overlay: !this.state.overlay});
  }

  handleAddToCart(e, item) {
    e.preventDefault();
    const cartData = {
      _id: item._id,
      name: item.name,
      qty: 1,
      price: item.price,
      totalPrice: item.price,
      note:'',
      minAmount: 1,
      maxAmount: 10,
    };
    this.props.addToCart(cartData);
    this.props.pushLocalStorage(cartData);
  }

  render() {
    const { product, loading:{active, error} } = this.props;
    const { imageIndex, overlay } = this.state;

    const { name, images, description, oldPrice, price } = product;

    if(active || !product._id){
      return (
        <div>
          <Spinner animation='border' variant='warning'/>
        </div>
      );
    } else if(error) {
      return (
        <div>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </div>
      );
    } else {
      return(
        <div className={styles.root}>
          <Container>
            <Row>
              <Col xs='5'>
                <div className={styles.image}>
                  <img src={images[imageIndex]} alt={name} onClick={() => this.toggleOverlay()}/>
                </div>
                <div className={styles.gallery}>
                  {images.map(pic => (
                    <img key={pic} src={pic} alt='pic' onClick={() => this.handleImage(pic)} />
                  ))}
                </div>
              </Col>
              <Col xs='7'>
                <Row>
                  <Col md='6' xs='12'>
                    <div className={styles.description}>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </Col>
                  <Col md='6' xs='12'>
                    {oldPrice ?
                      <div className={styles.hotDeal}>
                        <h4>HOT DEAL</h4>
                        <h5>Old Price crossed out</h5>
                        <div className={styles.oldPrice}>${oldPrice}</div>
                      </div>
                      : null
                    }
                    <h2 className={styles.price}>Today price: ${price}</h2>
                    <div className={styles.cart}>
                      <h4>ADD TO CART</h4>
                      <button onClick={(e) => this.handleAddToCart(e, product) }>
                        <IoCartOutline size='80' color='white'/>
                      </button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className={overlay ? styles.overlayActive : styles.overlay}>
            <div className={styles.exit} onClick={() => this.toggleOverlay()}>X</div>
            <div>
              <button className={styles.button}>
                <IoChevronBack size='40' />
              </button>
              <div className={styles.imageWrapper}>
                <img src={images[imageIndex]} alt={name}/>
              </div>
              <button className={styles.button}>
                <IoChevronForward size='40'/>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

Component.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  cart: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  match: PropTypes.object,
  addToCart: PropTypes.func,
  fetchProductByIdApi: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  }),
  pushLocalStorage: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getProductByID(state, props.match.params.id),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProductByIdApi: (id) => dispatch(fetchProductById(id)),
  addToCart: (item) => dispatch(addToCart(item)),
  pushLocalStorage: (cart) => dispatch(pushToLocalStorage(cart)),
});

const ProductViewContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ProductViewContainer as ProductView,
  Component as ProductViewComponent,
};
