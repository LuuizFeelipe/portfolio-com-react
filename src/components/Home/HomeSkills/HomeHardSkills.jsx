import React from 'react';
import stylesGeral from './Skills.module.css';
import styles from './HomeHardSkills.module.css';
import Tecnologia from '../../Elementos/Tecnologia';
import HTMLicon from '../../../assets/html.svg?react';
import CSSicon from '../../../assets/css.svg?react';
import SASSicon from '../../../assets/sass.svg?react';
import TAILWINDicon from '../../../assets/tailwind.svg?react';
import JAVASCRIPTicon from '../../../assets/javascript.svg?react';
import TYPECRIPTicon from '../../../assets/typescript.svg?react';
import REACTicon from '../../../assets/react.svg?react';
import FIGMAicon from '../../../assets/figma.svg?react';
import { useLocation } from 'react-router-dom';

const HomeHardSkills = () => {
  const location = useLocation().pathname;

  return (
    <section id='hard-skills' className={`${stylesGeral.section} ${styles.section} ${location != '/' && stylesGeral.pageSkill && "animeTop"}`}>
      <div className={stylesGeral.textos}>
        <div className={`${styles.titleSubtitle} ${stylesGeral.titleSubtitle}`}>
          <h2 className={stylesGeral.title}><span>Hard</span>Skills<span className='marcador'>.</span></h2>
          <p className='subtitulo'>Habilidades Técnicas Específicas</p>
        </div>
        <p className={stylesGeral.textSkill}>
          Aqui apresento minhas principais competências técnicas desenvolvidas ao longo da minha trajetória como desenvolvedor Front-end. Cada habilidade reflete minha dedicação em construir experiências digitais modernas e eficientes.
        </p>
      </div>
      <div className={`${styles.skills} ${stylesGeral.skills}`}>
        <Tecnologia tecnologia='HTML'><HTMLicon /></Tecnologia>
        <Tecnologia tecnologia='CSS'><CSSicon /></Tecnologia>
        <Tecnologia tecnologia='SASS'><SASSicon /></Tecnologia>
        <Tecnologia tecnologia='TAILWIND'><TAILWINDicon /></Tecnologia>
        <Tecnologia tecnologia='JAVASCRIPT'><JAVASCRIPTicon /></Tecnologia>
        <Tecnologia tecnologia='TYPESCRIPT'><TYPECRIPTicon /></Tecnologia>
        <Tecnologia tecnologia='REACT JS'><REACTicon /></Tecnologia>
        <Tecnologia tecnologia='FIGMA'><FIGMAicon /></Tecnologia>
      </div>
    </section>
  )
}

export default HomeHardSkills
