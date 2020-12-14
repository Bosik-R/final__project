import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';


import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h6>follow us on social medias</h6>
    <ul>
      <li>
        <button>
          <FaTwitter color='white' size='20'/>
        </button>
      </li>
      <li>
        <button>
          <FaFacebookF color='white' size='20'/>
        </button>
      </li>
      <li>
        <button>
          <FaInstagram color='white' size='20'/>
        </button>
      </li>
    </ul>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
