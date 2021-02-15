import React from 'react';
import PropTypes from 'prop-types';
import { order } from '../../../redux/orderRedux';
import { connect } from 'react-redux';
import styles from './Order.module.scss';
import { Container, Row, Col } from 'react-bootstrap';


const Component = ({ order }) => {
  console.log(order);
  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col>
            <Row className={styles.rowBorder}>
              <Col xs='12' md='5'>Order ID:</Col>
              <Col xs='12' md='7'>iiii</Col>
            </Row>
          </Col>
          <Col>
            <Row className={styles.rowBorder}>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Component.propTypes = {
  order: PropTypes.object,
};

const mapStateToProps = state => ({
  order: order(state),
});

const OrderContainer = connect(mapStateToProps)(Component);
export { OrderContainer as Order };
