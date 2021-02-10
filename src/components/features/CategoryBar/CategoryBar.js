import React from 'react';
import PropTypes from 'prop-types';

import { Container,Row, Col, Spinner } from 'react-bootstrap';

import { ProductBox } from '../ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAllProducts, fetchProducts, getLoadingState } from '../../../redux/productsRedux';
import { getAllCategories, fetchCategories } from '../../../redux/categoriesRedux';
import { getCart } from '../../../redux/cartRedux';

import styles from './CategoryBar.module.scss';

class Component extends React.Component {
  state = {
    activeCategory: 'accessories',
  }

  componentDidMount() {
    const { fetchAllProducts, fetchAllCategories } = this.props;

    fetchAllProducts();
    fetchAllCategories();
  }

  handleCategory(category) {
    this.setState({activeCategory: category.id});
  }

  render() {
    const { products, categories, loading:{active, error}} = this.props;
    const { activeCategory } = this.state;

    if(active || !categories.length){
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
      const productsFiltered = products.filter(product => product.category === activeCategory);
      return (
        <div className={styles.root}>
          <Container >
            <Row>
              <Col xs='12' className={styles.tabsWrapper}>
                <ul>
                  {categories.map(category => (
                    <li
                      key={category._id}
                      className={category.id === activeCategory ? styles.tabActive : styles.tab}
                      onClick={() => this.handleCategory(category)}
                    >{category.name}</li>
                  ))}
                </ul>
              </Col>
              <Col xs='12' className={styles.products}>
                <div className={styles.productsList}>
                  {productsFiltered.map(product => (
                    <div key={product.id} className={styles.productWrapper}>
                      <ProductBox item={product} />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}


Component.propTypes = {
  fetchAllProducts: PropTypes.func,
  fetchAllCategories: PropTypes.func,
  cart: PropTypes.object,
  products: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  categories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  }),
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
  categories: getAllCategories(state),
  cart: getCart(state),
  loading: getLoadingState(state),
  //cartlocal: pushToLocalStorage(state),
  //cartLocal: getFromLocalStorage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchProducts()),
  fetchAllCategories: () => dispatch(fetchCategories()),
  //fetchLocalStorage: () => dispatch(getFromLocalStorage()),
});

const ContainerCategoryBar = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerCategoryBar as CategoryBar,
  Component as CategoryBarComponent,
};
