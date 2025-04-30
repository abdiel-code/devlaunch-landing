import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import { Header, Hero } from './components';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );}