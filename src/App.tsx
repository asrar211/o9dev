import './App.css'
import { Cursor } from './components/ui/cursor'
import { Home } from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Cursor/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
