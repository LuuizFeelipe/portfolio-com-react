import React from 'react'
import HomeApresentacao from './HomeApresentacao/HomeApresentacao'
import HomeSobreMim from './HomeSobreMim/HomeSobreMim'
import HomeHardSkills from './HomeSkills/HomeHardSkills'
import HomeSoftSkills from './HomeSkills/HomeSoftSkills'
import HomeProjects from './HomeProjects/HomeProjects'


const Home = () => {
  return (
    <>
      <HomeApresentacao />
      <HomeSobreMim />
      <HomeHardSkills />
      <HomeSoftSkills />
      <HomeProjects />
    </>
  )
}

export default Home
