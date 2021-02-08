import React from 'react';

import TopBar from '../TopBar/TopBar';
import { MenuBar } from '../MenuBar/MenuBar';

import styles from './Header.module.scss';

const Component = () => (
  <div className={ styles.root}>
    <TopBar />
    <MenuBar />
  </div>
);

export {
  Component as Header,
  Component as HeaderComponent,
};
