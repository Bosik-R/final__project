import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Flag from 'react-world-flags';

import styles from './FlagIcon.module.scss';

const countries = [
  {id: 'gb', name: 'English'},
  {id: 'de', name: 'German'},
  {id: 'pl', name: 'Polish'},
];

const Component = ({ size }) => {
  const [classActive, setClassActive] = useState(false);
  const [activeCountry, setActiveCountry] = useState('gb');

  const countryName = (id) => {
    const country = countries.filter(country => country.id === id);
    return country[0].name;
  };

  const toggleActiveClass = () => {
    setClassActive(!classActive);
  };

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={toggleActiveClass}>
        <Flag code={activeCountry} height={size} />
        <span className={styles.country}>{countryName(activeCountry)}</span>
      </button>
      <div className={classActive ? styles.active : styles.hiden }>
      </div>
    </div>


  );
};


Component.propTypes = {
  size: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as FlagIcon,
  // Container as FlagIcon,
  Component as FlagIconComponent,
};
