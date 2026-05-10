import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container bg-light text-center mt-5 p-5'>
      <Link to="/even-odd" className='btn btn-primary m-2'>Even Odd Finder</Link>
      <Link to="/stop-watch" className='btn btn-danger m-2'>Stop Watch</Link>
      <Link to="/joke-generator" className='btn btn-secondary m-2'>Joke Generator</Link>
      <Link to='/LoginFormVlidation' className='btn btn-success m-2'>Login Form Validation</Link>
      <Link to='/AddToCartConsole' className='btn btn-info m-2'>Show products from array</Link>
      <Link to='/AddItemState' className='btn btn-warning m-2'>Add Item to Cart</Link>
      <Link to='/RemoveFromCart' className='btn btn-danger m-2'>Remove Item from Cart</Link>
    </div>
  )
}

export default Home
