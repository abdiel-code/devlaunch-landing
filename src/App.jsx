import React from 'react'

import Hero from './components/sections/Hero'
import '../src/styles/components/Hero.scss'

import '../src/styles/app.scss'

import Features from './components/sections/Features'
import ContactForm from './components/sections/ContactForm'
import Header from './components/layout/Header'

export default function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <ContactForm></ContactForm>
    </>

  );}