import React, { useState, useEffect, createContext } from 'react';

export const ContextGlobal = createContext();

export const StorageContextGlobal = ({ children }) => {
  const [mobile, setMobile] = useState(false);

  function verifyMobile() {
    const windowMobile = window.matchMedia('(max-width: 640px)').matches;
    setMobile(windowMobile);
  }

  useEffect(() => {
    verifyMobile(); // Verifica ao carregar a página
    window.addEventListener('resize', verifyMobile);
    
    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', verifyMobile);
    };
  }, []);

  return (
    <ContextGlobal.Provider value={{ mobile }}>
      {children}
    </ContextGlobal.Provider>
  );
};
