import React from 'react'
import data from '../../Projects/_projects.json';
import CardProject from '../../Projects/CardProject';
import styles from './HomeProjects.module.css';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../../../Context/ContextGlobal';

const HomeProjects = () => {
  const { mobile } = React.useContext(ContextGlobal);
  const qtdProjetosExibidos = mobile ? 1 : 2;

  return (
    <section className={styles.section} id='projetos'>
      <div className={styles.cabecalho}>
        <h2 className={styles.title}>Meus projetos<span className='marcador'>.</span></h2>
        <Link to='/projetos'>ver mais</Link>
      </div>

      <div className={styles.containerProjects}>
        {data && data.projects.slice(0, qtdProjetosExibidos).map((project) => {
          return (
            <CardProject 
              key={project.id}
              title={project.title}
              text={project.text}
              image={project.image}
              link={project.link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default HomeProjects
