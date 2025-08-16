import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Chooser from './components/Chooser'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chooser' element={<Chooser />} />
      </Routes>
    </div>
  )
}

export default App
