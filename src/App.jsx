import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
