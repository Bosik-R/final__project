import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductByID, fetchProductById, getLoadingState } from '../../../redux/productsRedux';
import { addToCart, getCart, pushToLocalStorage, pushQtyIncrease, updateLocalStorage, pushQtyDecrease } from '../../../redux/cartRedux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { BiExpand } from 'react-icons/bi';
import { FaEuroSign } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Overlay from '../../features/Overlay/Overlay';
import styles from './ProductView.module.scss';


class Component extends React.Component {

  state = {
    imageIndex: 0,
    overlay: false,
    qty: 1,
  }

  componentDidMount(){
    const {fetchProductByIdApi, match} = this.props;

    fetchProductByIdApi(match.params.id);
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

    const {cart, updateLocalStorage, addToCart} = this.props;

    item.qty = this.state.qty;

    addToCart(item);
    updateLocalStorage(cart);
  }

  qtyMinus() {
    const {qty} = this.state;
    if(qty <= 1) {
      this.setState({qty: 1});
    }else{
      this.setState({qty: qty - 1});
    }
  }

  qtyPlus() {
    const { qty } = this.state;
    if(qty >= 10) {
      this.setState({qty: 10});
    } else {
      this.setState({qty: qty + 1});
    }

  }

  render() {
    const { product, loading:{active, error} } = this.props;
    const { imageIndex, overlay, qty } = this.state;

    const { _id, name, images, description, oldPrice, price } = product;

    if(active || !_id){
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
            <Row className={styles.productWrapper}>
              <Col xs='12' md='5'>
                <Row>
                  <Col xs='8' md='12'>
                    <div className={styles.image}>
                      <img src={images[imageIndex]} alt={name}/>
                      <button onClick={() => this.toggleOverlay()}>
                        <BiExpand/>
                      </button>
                    </div>
                  </Col>
                  <Col xs='4' md='12'>
                    <div className={styles.gallery}>
                      {images.map(pic => (
                        <img key={pic} src={pic} alt='pic' onClick={() => this.handleImage(pic)} />
                      ))}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs='12' md='7'>
                <Row>
                  <Col className={styles.productInfo}>
                    <div>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                    <div className={styles.priceWrapper}>
                      {oldPrice ?
                        <div className={styles.oldPrice}>
                          <span>-40%</span>
                          <span>
                            <FaEuroSign size='20'/>
                            <div>{oldPrice}</div>
                          </span>
                        </div>
                        : null
                      }
                      <div className={styles.price}>
                        <div>Price:</div>
                        <FaEuroSign size='20'/>
                        <div>{price}</div>
                      </div>
                    </div>
                    <div className={styles.qty}>
                      <button onClick={() => this.qtyMinus()}>
                        <AiOutlineMinus/>
                      </button>
                      <div className={styles.qtyValue}>
                        <div>
                          {qty}
                        </div>
                      </div>
                      <button onClick={() => this.qtyPlus()}>
                        <AiOutlinePlus/>
                      </button>
                    </div>
                    <button className={styles.cart} onClick={(e) => this.handleAddToCart(e, product)}>
                      add to cart
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          {overlay ?
            <Overlay name={name} images={images} imageIndex={imageIndex}  handleImage={this.handleImage.bind(this)} toggle={this.toggleOverlay.bind(this)} />
            : null
          }
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
  qtyIncrease: PropTypes.func,
  updateLocalStorage: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getProductByID(state, props.match.params.id),
  loading: getLoadingState(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProductByIdApi: (id) => dispatch(fetchProductById(id)),
  addToCart: (item) => dispatch(addToCart(item)),
  qtyIncrease: (id) => dispatch(pushQtyIncrease(id)),
  qtyDecrease: (id) => dispatch(pushQtyDecrease(id)),
  pushLocalStorage: (item) => dispatch(pushToLocalStorage(item)),
  updateLocalStorage: (item) => dispatch(updateLocalStorage(item)),
});

const ProductViewContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ProductViewContainer as ProductView,
  Component as ProductViewComponent,
};
