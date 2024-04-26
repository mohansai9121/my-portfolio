//import React from 'react'
import './Navbar.css'
import logo from '../../assets/my-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='Mohan Sai' title='Mohan Sai'/>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect with me</div>
    </div>
  )
}

export default Navbar
