import React from 'react';
import styles from './CardProject.module.css';

const CardProject = ({title, text, image, link}) => {
  return (
    <a className={styles.cardLink} href={link ? link : "#"} target='_blank'>
      <figure className={styles.cardProject}>
        <div className={styles.containerImage}>
          <img src={image} alt='Imagem do projeto' loading='lazy'/>
          <span>ver projeto</span>
        </div>
        <figcaption className={styles.figcaption}>
          <h3>{title}</h3>
          <p>{text}</p>
        </figcaption>
      </figure>
    </a>

  )
}

export default CardProject
