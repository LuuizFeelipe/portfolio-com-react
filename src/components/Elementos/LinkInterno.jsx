import React from 'react'

const LinkInterno = ({ local, children, dataId, ...props }) => {

  function handleClick(e) {
    e.preventDefault();
    const id = dataId || local;
    const elemento = document.getElementById(id);

    if (elemento) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0; 

      const elementoTop = elemento.getBoundingClientRect().top + window.scrollY; 

      const scrollTo = elementoTop - headerHeight; 
      
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Elemento com id "${id}" não encontrado.`);
    }
  }

  return (
    <a href={`#${local}`} data-id={dataId} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default LinkInterno
