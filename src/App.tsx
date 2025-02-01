import './App.css'
import { Cursor } from './components/ui/cursor'
import { Home } from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Navbar } from './components/Home/Navbar'
import { Login } from './pages/Login'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Cursor/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
