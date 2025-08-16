import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20 shadow-md bg-gray-300 p-5'>
      <div className='flex items-center'>
        <img src={logo} className='h-10 w-10 rounded-md' alt="" />
        <h2 className='font-bold text-2xl'>Nearest <span className='text-blue-800'>Doctor</span></h2>
      </div>
      <div className='flex items-center'>
        <ul className='flex gap-7 text-xl font-medium cursor-pointer'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link>Pricing</Link></li>
            <li><Link to={"/blog"}>Blog</Link></li>
            <li><Link to={"/contact"}>Contact us</Link></li>
        </ul>
        <Link to={"/chooser"} className='text-xl font-medium ml-5 bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer'>Get Started</Link>
      </div>
    </div>
  )
}

export default Navbar
