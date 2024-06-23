import React from 'react' ; 
import "./homePage.css" ; 
import AsideComponent from '../../Component/Home/AsideComponent';
import StoryComponent from '../../Component/Home/StoryComponent';
import facebookLogo from "./../../Image/logo.png" ; 
import prom from "./../../Image/13875405.png" ;
import page from "./../../Image/6238834.png"
import git from "./../../Image/gift.png"
import onlineProfile from "./../../Image/mohamedPost.jpg"
import userProfile from "./../../Image/11820201.png"
import OnlineChat from '../../Component/Home/OnlineChat';

import cr7 from "./../../Image/cr7.jpg"
import mona from "./../../Image/mona zaki.jpg"
import helmy from "./../../Image/ahmed.jpg"
import hana from "./../../Image/hana.jpg"
import gor from "./../../Image/gor.jpg"
import instgram from "./../../Image/instgram.jpg"
import twitter from "./../../Image/twitter.jpg" 
import mark from "./../../Image/mark.jpg"

import halland from "./../../Image/halland.jpg"; 
import de from "./../../Image/de.jpg"
import messi from "./../../Image/messi.jpg"
import WritePostComponent from '../../Component/Home/WritePostComponent';




const HomePage = () => {

    const onlineChat = [
      {
        username : "Mohamed Salah" , 
        image : onlineProfile
      },
      {
        username : "Cristiano Ronaldo" , 
        image : cr7
      },      {
        username : "Mona Zaki" , 
        image : mona
      },      {
        username : "Hana Elzahed" , 
        image : hana
      },      {
        username : "Gorgina Rodruigez" , 
        image : gor
      },      {
        username : "Ahmed Helmy" , 
        image : helmy
      }, {
        username : "Instgram" , 
        image : instgram
      },
      {
        username : "Twitter" , 
        image : twitter
      },
      {
        username : "Mark Zarkburg" , 
        image : mark
      },
      {
        username : "Leo Messi" , 
        image : messi
      },
      {
        username : "Erling Hanland" , 
        image : halland
      },
      {
        username : "Kevin De Bruyne " , 
        image : de
      }
      
    ]

  return (
    <div className='container'>

        <AsideComponent />

        <main className='main-content'>
            <StoryComponent />
            <WritePostComponent />
        </main>

        <section className='sponser' style={{width : "350px"}}>
            <div className='own-page'>
              <h4>Your Pages and profiles</h4>
              <a className='page' href='https://facebook.com'>
                <img src={facebookLogo} alt='logo' loading='lazy' />
                <p>Facebook</p>
              </a>
            

              <div className='util'>
                <img src={page} alt='utl' />
                <h5>Switch into page</h5>
              </div>

              <div className='util'>
                <img src={prom} alt='utl' />
                <h5>Create promotion</h5>
              </div>

            </div>
            <div className='brithday' href='/'>
              <h4>Birthdays</h4>
              <a  href='/'>
                <img src={git} alt='gift' />
                <p><span className='txt-bold'>Mohamed Salah</span> and <span className='txt-bold'>Messi</span> have a brithdays today </p>
              </a>
            </div>

            <div className='online'>
              <div className='online-head'>
                <h4>Contacts</h4>
                <div className='online-search'>
                  <span className="material-symbols-outlined">
                  search
                  </span>
                  <span class="material-symbols-outlined">
                    more_horiz
                  </span>
                </div>
              </div>

              {
                onlineChat.map((item)=>{
                  return (
                    <OnlineChat image={item.image} username={item.username}></OnlineChat>
                  )
                })
              }

            </div>

        </section>
    
    </div>
  )
}

export default HomePage
