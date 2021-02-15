import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLanguages } from '../../../redux/productsRedux';
import {
  Ri24HoursLine,
  RiTruckLine,
  RiArrowGoBackLine,
  RiMoneyEuroCircleLine,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from 'react-icons/ri';
import { Container, Row, Col } from 'react-bootstrap';
import Flag from 'react-world-flags';
import useOutsideClick from '../../../utilities/clickOutsideHook';
import styles from './TopBar.module.scss';

const Component = ({ languages }) => {
  const [language, setLanguage] = useState(languages[0].name);
  const [code, setCode] = useState(languages[0].code);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (code) => {
    const filtered = languages.filter(item => item.code === code);

    setCode(filtered[0].code);
    setLanguage(filtered[0].name);
    setOpen(false);
  };

  useOutsideClick(ref,  () => setOpen(false));

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col xs='12' sm='9'>
            <ul className={styles.promo}>
              <li>
                <RiTruckLine className={styles.promoIcon}/><span>free shipinng</span>
              </li>
              <li>
                <Ri24HoursLine className={styles.promoIcon}/><span>delivery in 24h</span>
              </li>
              <li>
                <RiArrowGoBackLine className={styles.promoIcon}/><span>free return</span>
              </li>
              <li>
                <RiMoneyEuroCircleLine className={styles.promoIcon}/><span>best price guarantee</span>
              </li>
            </ul>
          </Col>
          <Col xs='12' sm='3'>
            <div className={styles.language} ref={ref}>
              <button className={styles.button} onClick={() => handleOpen()}>
                <Flag code={code} height='12' />
                <span className={styles.buttonTitle}>{language}</span>
                {open ?
                  <RiArrowUpSFill className={styles.dropdownIcon} />
                  : <RiArrowDownSFill className={styles.dropdownIcon} />}
              </button>
              <ul className={!open ? styles.dropdownClosed : styles.dropdownOpen}>
                {languages.map(item =>
                  <li key={item.code}>
                    <button onClick={() => handleChange(item.code)}>
                      <Flag code={item.code} height='16' width='24'/>
                      <span className={styles.buttonTitle}>{item.name}</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Component.propTypes = {
  languages: PropTypes.array,
};

const mapStateToProps = state => ({
  languages: getLanguages(state),
});

const TopBarContainer = connect(mapStateToProps)(Component);

export {
  TopBarContainer as TopBar,
  Component as TopBarComponent,
};
