
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import EvenOdd from './components/EvenOdd'
import Home from './Home'
import StopWatch from './components/StopWatch'
import JokeGenerator from './components/JokeGenerator'
import LoginFormValidation from './components/LoginFormValidation'
import AddToCartConsole from './components/AddToCartConsole'
import AddItemState from './components/AddItemState'
import RemoveFromCart from './components/RemoveFromCart'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/even-odd' element={<EvenOdd />} />
        <Route path='/stop-watch' element={<StopWatch />} />
        <Route path='/joke-generator' element={<JokeGenerator />} />
        <Route path='/LoginFormVlidation' element={<LoginFormValidation />} />
        <Route path='/AddToCartConsole' element={<AddToCartConsole />} />
        <Route path='/AddItemState' element={<AddItemState />} />
        <Route path='/RemoveFromCart' element={<RemoveFromCart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
