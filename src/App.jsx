import React from 'react';
import reactDOM from 'react-dom'
// import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Community from './components/Banner/Community.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
  
    <Hero />
    <Services />
    <Banner />
    <Subscribe />
    <Community />
    <Footer />
    </main>
  )
}

export default App
