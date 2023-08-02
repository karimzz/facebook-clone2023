import React from 'react' ; 
import "./homePage.css" ; 
import AsideComponent from '../../Component/Home/AsideComponent';
import StoryComponent from '../../Component/Home/StoryComponent';


const HomePage = () => {
  return (
    <div className='container'>

        <AsideComponent />

        <main className='main-content'>
            <StoryComponent />
        </main>

        <section className='sponser' style={{width : "350px"}}>
            Active
        </section>
    
    </div>
  )
}

export default HomePage
