import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import { RecoilRoot } from 'recoil'

function App() {
  
  return (
    <RecoilRoot>
      <div>
        <h2>Hey</h2>
        <Todos />
      </div>
    </RecoilRoot>
  )
}

export default App
