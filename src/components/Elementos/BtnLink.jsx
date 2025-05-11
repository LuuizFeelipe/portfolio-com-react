import React from 'react';
import styles from './BtnLink.module.css';

const BtnLink = ({ href, children, classStyle }) => {
  return (
    <div
      className={`${styles.conteudo} ${classStyle}`}
    >
      <div className={styles.degradeEfeito}></div>
      <a
        href={href}
        target='_blank'
        className={styles.botao}
      >
        {children}
      </a>
    </div>
  );
};

export default BtnLink


