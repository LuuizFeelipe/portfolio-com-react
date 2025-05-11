import React from 'react';
import stylesGeral from './Skills.module.css';
import styles from './HomeSoftSkills.module.css';
import SkillSoft from '../../Elementos/SkillSoft';
import PERSONS from '../../../assets/persons.svg?react';
import BRAIN from '../../../assets/brain.svg?react';
import PUZZLE from '../../../assets/puzzle.svg?react';
import CHAT from '../../../assets/chat.svg?react';
import HAND from '../../../assets/hand.svg?react';
import { useLocation } from 'react-router-dom';

const HomeSoftSkills = () => {
  const location = useLocation().pathname;

  return (
    <section
      id="soft-skills"
      className={`${stylesGeral.section} ${styles.section} ${location != '/' && stylesGeral.pageSkill && "animeTop"}`}
    >
      <div className={`${styles.skills} ${stylesGeral.skills}`}>
        <SkillSoft frase='Trabalho em equipe;'><PERSONS /></SkillSoft>
        <SkillSoft frase='Resolução de problemas;'><BRAIN /></SkillSoft>
        <SkillSoft frase='Criatividade;'><PUZZLE /></SkillSoft>
        <SkillSoft frase='Comunicação;'><CHAT /></SkillSoft>
        <SkillSoft frase='Empatia;'><HAND /></SkillSoft>
      </div>
      <div className={`${stylesGeral.textos}`}>
        <div className={`${styles.titleSubtitle} ${stylesGeral.titleSubtitle}`}>
          <h2 className={stylesGeral.title}>
            <span className="marcador">.</span>
            <span>Soft</span>Skills
          </h2>
          <p className="subtitulo">Habilidades Interpessoais</p>
        </div>
        <p className={`${stylesGeral.textSkill} ${styles.textSkill}`}>
          Aqui destaco as habilidades interpessoais que moldam meu trabalho: colaboração em equipe, comunicação clara, resiliência e adaptabilidade. Acredito que a empatia, o pensamento crítico e a busca constante por evolução são essenciais para criar conexões verdadeiras e impulsionar projetos de forma estratégica e eficiente.
        </p>
      </div>
    </section>
  );
};

export default HomeSoftSkills;
