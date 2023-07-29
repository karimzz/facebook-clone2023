import React from 'react'
import profilePicture from "./../../Image/profile.jpg"
import "./utility.css"

const NavBar = () => {
  return (
    <nav>
        <div className='not'>
            <a href='/' className='link photo'><img src={profilePicture} alt='pro' /> </a>
            <a href='/' className='link'><i className="fa-brands fa-facebook-messenger"></i></a>
            <a href='/' className='link'><i className="fa-solid fa-bars"></i></a>
        </div>
        <div className='icons'>
            <div className='item'> <a href='/'><i class="fa-solid fa-people-group"></i></a></div>
            <div className='item'> <a href='/'><span class="material-symbols-outlined">multicooker</span></a></div>
            <div className='item'> <a href='/'><i class="fa-brands fa-youtube"></i></a></div>
        </div>
        <div className='searc'></div>
    </nav>

  )
}

export default NavBar
