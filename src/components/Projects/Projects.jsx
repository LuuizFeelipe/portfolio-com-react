import React from 'react'
import data from './_projects.json';
import CardProject from './CardProject';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={`${styles.section} animeTop`}>
      <h2 className={styles.title}>Meus projetos<span className="marcador">.</span></h2>
      <div className={styles.projects}>
        {data && data.projects.map((project) => {
          return (
            <CardProject 
              key={project.id} 
              title={project.title}
              text={project.text}
              link={project.link}
              image={project.image}
            />
          )
        })}
      </div>
      
    </section>
  )
}

export default Projects
