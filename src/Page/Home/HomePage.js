import React from 'react' ; 
import "./homePage.css" ; 
import profilePic  from "../../Image/profile.jpg" ; 
import AsideComponent from '../../Component/Home/AsideComponent';


const HomePage = () => {
  return (
    <div className='container'>

        <AsideComponent />

        <main>
            Main
        </main>

        <section className='sponser'>
            Active
        </section>
    
    </div>
  )
}

export default HomePage
