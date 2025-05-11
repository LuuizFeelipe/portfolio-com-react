import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import './App.css';
import Main from './components/Main';
import HomeSobreMim from './components/Home/HomeSobreMim/HomeSobreMim';
import HomeHardSkills from './components/Home/HomeSkills/HomeHardSkills';
import HomeSoftSkills from './components/Home/HomeSkills/HomeSoftSkills';
import BtnTop from './components/Elementos/BtnTop';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projetos' element={<Projects />}/>
            <Route path='/projetos' element={<Projects />}/>
            <Route path='/sobre-mim' element={<HomeSobreMim />}/>
            <Route path='/hard-skills' element={<HomeHardSkills />}/>
            <Route path='/soft-skills' element={<HomeSoftSkills/>} />
          </Routes>
        </Main>
        <BtnTop />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
