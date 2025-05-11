import React from 'react'
import styles from './HomeSobreMim.module.css';
import { useLocation } from 'react-router-dom';

const HomeSobreMim = () => {
  const location = useLocation().pathname;

  return (
    <section className={`${styles.section} animeTop ${location != '/' && styles.pageSobreMim}`} id='sobre-mim'>
      <h2 className={styles.title}>Sobre mim<span className='marcador'>.</span></h2>
      <p>Atualmente curso Bacharelado em Sistemas de Informação no CEFET/RJ e sou apaixonado pelo universo da tecnologia e da inovação. Natural de Nova Friburgo/RJ, carrego comigo o espírito de constante evolução — um compromisso que levo para cada projeto, desafio e aprendizado que abraço.</p>
      <p>Acredito que o crescimento pessoal e profissional andam lado a lado, e busco sempre me superar e explorar novas possibilidades dentro da minha área. Fora do ambiente acadêmico, encontro equilíbrio e inspiração na prática de esportes e em trilhas pela natureza, atividades que reforçam minha determinação, foco e paixão por desafios.</p>
      <p>Levo a vida com uma alma leve e um olhar otimista, acreditando que enxergar as situações com leveza potencializa a criatividade e fortalece o caminho para soluções inovadoras. Cada passo na minha trajetória é movido pela vontade de construir experiências que unam funcionalidade, sensibilidade e impacto positivo.</p>
    </section>
  )
}

export default HomeSobreMim
