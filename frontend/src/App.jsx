import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Chooser from './components/Chooser'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chooser' element={<Chooser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
