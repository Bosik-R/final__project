import React from 'react';

import { TopBar } from '../TopBar/TopBar';
import { MenuBar } from '../MenuBar/MenuBar';

import styles from './Header.module.scss';

const Component = () => (
  <div className={ styles.root}>
    <TopBar />
    <MenuBar />
  </div>
);

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  Component as HeaderComponent,
};
