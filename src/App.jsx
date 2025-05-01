import React from 'react'

import Hero from './components/sections/Hero'
import '../src/styles/components/Hero.scss'

import '../src/styles/app.scss'

import Features from './components/sections/Features'
import ContactForm from './components/sections/ContactForm'

export default function App() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <ContactForm></ContactForm>
    </>

  );}