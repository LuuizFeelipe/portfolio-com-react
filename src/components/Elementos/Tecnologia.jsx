import React from 'react';
import styles from './Tecnologia.module.css';

const Tecnologia = ({tecnologia, children}) => {
  return (
    <div className={styles.tecnologia}>
      {children}
      <p>{tecnologia}</p>
    </div>
  )
}

export default Tecnologia
