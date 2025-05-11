import React from 'react';
import styles from './SkillSoft.module.css';

const SkillSoft = ({ children, frase }) => {
  return (
    <div className={styles.skill}>
      {children}
      <p>{frase}</p>
    </div>
  );
};

export default SkillSoft;
