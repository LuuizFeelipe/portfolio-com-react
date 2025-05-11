import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/logo.svg?react';
import IconMenu from '../assets/menu-hamburguer.svg?react';
import IconMenuClose from '../assets/close-btn.svg?react';
import LinkInterno from './Elementos/LinkInterno';
import BtnLink from './Elementos/BtnLink';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ContextGlobal } from '../Context/ContextGlobal';

const Header = () => {
  const location = useLocation().pathname;
  const { mobile } = React.useContext(ContextGlobal);
  const [menuMobile, setMenuMobile] = React.useState(false);
  const nav = React.useRef();

  React.useEffect(() => {
    const navElement = nav.current;
    if (!navElement) return;

    // Fecha o menu se clicar em um link
    const handleClickInside = (event) => {
      const target = event.target;
      if (target.closest('a')) {
        setMenuMobile(false);
      }
    };

    // Fecha o menu se clicar fora do nav
    const handleClickOutside = (event) => {
      if (menuMobile && navElement && !navElement.contains(event.target)) {
        setMenuMobile(false);
      }
    };

    navElement.addEventListener('click', handleClickInside);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      navElement.removeEventListener('click', handleClickInside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuMobile]);

  function handleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className={styles.header}>
      <div className='conteudo'>
        <div className={styles.menuContainer}>
          {mobile &&
            <div className={styles.menuButton} onClick={handleMenuMobile}>
              {menuMobile ? <IconMenuClose /> : <IconMenu />}
            </div>
          }
          <Link to='/'><Logo /></Link>
        </div>

        <nav 
          ref={nav} 
          className={`${styles.nav} ${mobile && menuMobile && styles.active}`}>
          {location === '/' 
            ? <>
                <LinkInterno local='sobre-mim' dataId='sobre-mim'>Sobre mim</LinkInterno>
                <LinkInterno local='hard-skills' dataId='hard-skills'>Hard Skills</LinkInterno>
                <LinkInterno local='soft-skills' dataId='soft-skills'>Soft Skills</LinkInterno>
                <LinkInterno local='projetos' dataId='projetos'>Projetos</LinkInterno>
              </>
            : <>
                <NavLink to='/sobre-mim'>Sobre mim</NavLink>
                <NavLink to='/hard-skills'>Hard Skills</NavLink>
                <NavLink to='/soft-skills'>Soft Skills</NavLink>
                <NavLink to='/projetos'>Projetos</NavLink>
              </>
          } 
        </nav>

        <BtnLink href='https://api.whatsapp.com/send?phone=5522999563691&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Front-End!'>
          contato
        </BtnLink>
      </div>
    </header>
  )
}

export default Header;

