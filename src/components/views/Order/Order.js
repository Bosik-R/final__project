import React from 'react';
import PropTypes from 'prop-types';
import { order } from '../../../redux/orderRedux';
import { connect } from 'react-redux';
import styles from './Order.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEuroSign } from 'react-icons/fa';

const Component = ({ order }) => {

  if(order._id !== undefined){
    return (
      <div className={styles.root}>
        <Container>
          <Row className={styles.wrapper}>
            <Col className={styles.wrapperCol}>
              <Row className={styles.rowBorder}>
                <Col xs='12' md='5' className={styles.id}>Order ID:</Col>
                <Col xs='12' md='7' className={styles.idValue}>{order._id}</Col>
              </Row>
              <Row className={styles.rowBorder}>
                <Col xs='5' md='5' className={styles.name}>Name:</Col>
                <Col xs='7' md='7' className={styles.value}>{order.name}</Col>
              </Row>
              <Row className={styles.rowBorder}>
                <Col xs='5' md='5' className={styles.name}>Adress:</Col>
                <Col xs='7' md='7' className={styles.value}>{order.adress}</Col>
              </Row>
              <Row className={styles.rowBorder}>
                <Col xs='5' md='5' className={styles.name}>Email:</Col>
                <Col xs='7' md='7' className={styles.value}>{order.email}</Col>
              </Row>
              {order.info.length ?
                <Row className={styles.rowBorder}>
                  <Col xs='2' className={styles.name}>Info:</Col>
                  <Col xs='10' className={styles.value}>{order.info}</Col>
                </Row>
                : null
              }
              {order.products.map(item => (
                <Row key={item._id} className={styles.productWrapper}>
                  <Col xs='12' md='6'>
                    <Row className={styles.rowBorder}>
                      <Col xs='6' className={styles.name}>Product name:</Col>
                      <Col xs='6' className={styles.value}>{item.name}</Col>
                    </Row>
                    <Row className={styles.rowBorder}>
                      <Col xs='6' className={styles.name}>Price:</Col>
                      <Col xs='6' className={styles.value}><FaEuroSign/>{item.price}</Col>
                    </Row>
                  </Col>
                  <Col xs='12' md='6'>
                    <Row className={styles.rowBorder}>
                      <Col xs='6' className={styles.name}>QTY</Col>
                      <Col xs='6' className={styles.value}>{item.qty}</Col>
                    </Row>
                    <Row className={styles.rowBorder}>
                      <Col xs='6' className={styles.name}>Total:</Col>
                      <Col xs='6' className={styles.value}><FaEuroSign/>{item.qty * item.price}</Col>
                    </Row>
                  </Col>
                </Row>
              ))}
              <Row className={styles.rowBorder}>
                <Col xs='7' className={styles.name}>Order Total Value:</Col>
                <Col xs='5' className={styles.value}><FaEuroSign/>{order.totalValue}</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }else{
    return (
      <div className={styles.empty}>
        <h1>NO CURRENT ORDER</h1>
      </div>
    );
  }
};

Component.propTypes = {
  order: PropTypes.object,
};

const mapStateToProps = state => ({
  order: order(state),
});

const OrderContainer = connect(mapStateToProps)(Component);
export { OrderContainer as Order };
