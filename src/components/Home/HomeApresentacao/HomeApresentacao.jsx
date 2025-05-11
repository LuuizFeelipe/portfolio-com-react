import React from 'react'
import BtnLink from '../../Elementos/BtnLink'
import Foto from '../../../assets/foto.png'
import styles from './HomeApresentacao.module.css'

const HomeApresentacao = () => {
  return (
    <section className={`${styles.section} animeTop`}>
      <div className={styles.textos}>
        <h1 className={styles.title}>
          Olá, eu sou o <span>Luiz</span><span className='marcador'>.</span>
        </h1>
        <p className='subtitulo'>
          Desenvolvedor Web Front-end 
          & UX/UI Designer
        </p>
        <BtnLink href='https://api.whatsapp.com/send?phone=5522999563691&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Front-End!' classStyle={styles.botao}>entre em contato</BtnLink>
      </div>
      <img className={styles.imagem} src={Foto} alt="Luiz Felipe - desenvolvedor front-end"/>
    </section>
  )
}

export default HomeApresentacao
