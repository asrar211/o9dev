import './App.css'
import { Home } from './pages/Home'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
