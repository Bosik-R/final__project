import React from 'react';
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

export {
  Component as Footer,
  Component as FooterComponent,
};
