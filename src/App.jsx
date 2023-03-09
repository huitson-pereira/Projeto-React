import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/CardApresentacao'
import CardApresentacao from "./components/CardApresentacao.jsx"

function App() {
  
  return (
    <CardApresentacao 
    foto="https://avatars.githubusercontent.com/u/124617896?s=400&u=622eeb0f38233e6a2ad05a026745ce4d13da631f&v=4" 
    nome ="Huitson Orlins Pereira" 
    idade = "58" 
    git="https://github.com/huitson-pereira" 
    linkedin="https://www.linkedin.com/in/huitson-pereira-6a7393163/" />
  )
}

export default App