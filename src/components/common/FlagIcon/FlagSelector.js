import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Flag from 'react-world-flags';

import styles from './FlagSelector.module.scss';

const Component = ({className}) => {

  const countries = [
    {id: 'gb', name: 'English'},
    {id: 'de', name: 'German'},
    {id: 'pl', name: 'Polish'},
  ];

  return (

    <ul className={clsx(className, styles.root)}>
      {countries.map(country => (
        <li key={country.id}>
          <Flag code={country.id} height='15'/> {country.name}
        </li>
      ))},
    </ul>

  );
};


Component.propTypes = {
  countries: PropTypes.number,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as FlagSelector,
  // Container as FlagSelector,
  Component as FlagSelectorComponent,
};
