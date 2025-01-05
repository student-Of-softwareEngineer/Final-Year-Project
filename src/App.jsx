import { useState } from 'react'
import Header from './Component/Header'
import Home from './Component/Home'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Home/>

    </>
  )
}

export default App
