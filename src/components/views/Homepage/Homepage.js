import React from 'react';
import { Promoted } from '../../features/Promoted/Promoted';
import { CategoryBar } from '../../features/CategoryBar/CategoryBar';
import styles from './Homepage.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Promoted />
    <CategoryBar />
  </div>
);


export {
  Component as Homepage,
  Component as HomepageComponent,
};
