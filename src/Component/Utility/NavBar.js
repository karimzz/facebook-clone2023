import React from 'react' ; 
import profilePicture from "./../../Image/profile.jpg" ; 
import facebookIcon from "./../../Image/facebook.png"
import "./utility.css" ; 

const NavBar = () => {
  return (
    <nav>
        <div className='search'>
            <div className='iconF'>
              <img loading='lazy' alt='facebook' src={facebookIcon}  />
            </div>
            <div className='bar'>
              <span className="material-symbols-outlined">
              search
              </span>
              <input placeholder='Search Facebook' />
            </div>
        </div>
       
        <div className='icons'>
        
            <div className='item'> <a href='/' className='active' ><i className="fa-solid fa-house"></i></a></div>
            <div className='item'> <a href='/'><span className="material-symbols-outlined">subscriptions</span></a></div>
            <div className='item'> <a href='/'><i className="fa-solid fa-users-line"></i></a></div>
            <div className='item'> <a href='/'><span className="material-symbols-outlined">stadia_controller</span></a></div>
        </div>
        
        <div className='not'>
        <a href='/' className='link '><span className="material-symbols-outlined">menu</span></a>
        <a href='/' className='link'><i className="fa-brands fa-facebook-messenger"></i></a>
        <a href='/' className='link'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg></a>
        <a href='/' className='link photo statu'><img src={profilePicture} alt='pro' /> </a>

    </div>
    </nav>

  )
}

export default NavBar
