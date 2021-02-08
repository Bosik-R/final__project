import React from 'react';

import styles from './NotFound.module.scss';

const Component = () => (
  <div className={styles.root}>
    <img src={'/images/notfound.jpg'} alt='notfound'/>
    <h2>Not Found</h2>
  </div>
);

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
