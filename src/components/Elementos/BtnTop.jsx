import React from 'react'
import styles from './BtnTop.module.css';
import ARROW from '../../assets/arrow.svg?react';

const BtnTop = () => {
  const [estateButton, setEstateButton] = React.useState(false);

  function handleScroll() {
    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;

    if(scrollHeight > windowHeight * (50/100)) {
      setEstateButton(true);
    } else {
      setEstateButton(false);
    }
  }

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <button onClick={handleClick} className={`${styles.button} ${estateButton ? styles.active : ''}`}>
      <ARROW />
    </button>
  )
}

export default BtnTop
