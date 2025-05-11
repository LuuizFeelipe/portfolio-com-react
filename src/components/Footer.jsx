import React from 'react';
import styles from './Footer.module.css';
import Wpp from '../assets/wpp.svg?react'
import GitHub from '../assets/github.svg?react'
import Linkedin from '../assets/linkedin.svg?react'
import Email from '../assets/email.svg?react'

const Footer = () => {

  const ano = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} conteudo`}>
      <h3 className={styles.title}>Redes Sociais & Contato</h3>
      <div className={styles.redesSociais}> 
        <a target='_blank' href="https://www.linkedin.com/in/luiz-felipe-60a8191b0/">
          <Linkedin />
        </a>
        <a target='_blank' href="https://api.whatsapp.com/send?phone=5522999563691&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Front-End!">
          <Wpp />
        </a>
        <a target='_blank' href="https://github.com/LuuizFeelipe">
          <GitHub />
        </a>
        <a target='_blank' href="mailto:luiznovafluiz@gmail.com">
          <Email />
        </a>
      </div>  
      <p className={styles.textoFooter}>Desenvolvido com React, JavaScript e CSS.</p>
      <p className={styles.textoFooter}>© {`${ano}`} Luiz.dev — Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
