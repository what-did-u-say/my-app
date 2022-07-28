/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Menu from './components/Menu/Menu'
import NewMenu from './components/NewMenu/NewMenu'

const App = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <NewMenu/>
      <Menu/>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default App