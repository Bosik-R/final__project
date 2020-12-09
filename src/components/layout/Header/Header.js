import React from 'react';

import { TopNav } from '../TopNav/TopNav';
import { UserPanel } from '../../features/UserPanel/UserPanel';

import styles from './Header.module.scss';

const Component = () => (
  <div className={ styles.root}>
    <TopNav />
    <UserPanel />
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
