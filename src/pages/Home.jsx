import React from 'react'
import Affiliations from "../components/Affiliations"
import About from '../components/About'
import Publications from '../components/Publications'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Announcements from '../components/Announcements'
import CurvedSlider from '../components/CurvedSlider'
import CampusInfrastructure from '../components/CampusInfrastructure'
import Ai from '../components/Ai'
import Uparrow from '../components/Uparrow'
const Home = () => {
  return (    
    <div>
    <Uparrow/>
    <Ai/>
        <Header/>
        <Hero/>
        <Affiliations/>
        <About/>
        <Publications/>  
        <Announcements/>
        <CampusInfrastructure/> 
        <CurvedSlider/>     
        <Footer/>
    </div>
  )
}

export default Home
