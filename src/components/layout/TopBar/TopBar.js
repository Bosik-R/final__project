import React, { useState, useRef } from 'react';
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

const languages = [{id: 'gb', name: 'English'}, {id: 'pl', name: 'Polski'}, {id: 'de', name: 'Deutsch'}];

const TopBar = () => {
  const [language, setLanguage] = useState(languages[0].name);
  const [id, setId] = useState(languages[0].id);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  const handleOpen = (state) => {
    setOpen(state);
  };

  const handleChange = (id) => {
    const filtered = languages.filter(item => item.id === id);

    setId(filtered[0].id);
    setLanguage(filtered[0].name);
    setOpen(!open);
  };

  useOutsideClick(ref,  () => handleOpen(false));

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
              <button className={styles.button} onClick={() => handleOpen(true)}>
                <Flag code={id} height='12' />
                <span className={styles.buttonTitle}>{language}</span>
                {open ?
                  <RiArrowUpSFill className={styles.dropdownIcon} />
                  : <RiArrowDownSFill className={styles.dropdownIcon} />}
              </button>
              <ul className={!open ? styles.dropdownClosed : styles.dropdownOpen}>
                {languages.map(item =>
                  <li key={item.id}>
                    <button onClick={() => handleChange(item.id)}>
                      <Flag code={item.id} height='16' width='24'/>
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

export default TopBar;
