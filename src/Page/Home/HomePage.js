import React, { Fragment } from 'react' ; 
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
import AllPostComponent from '../../Component/Home/AllPostComponent';
import NavBar from '../../Component/Utility/NavBar';
import mohamedPic from "./../../Image/mohamedPost.jpg" ; 
import salehPic from "./../../Image/442437449_1053366222815001_3003621214341094569_n.jpg"
import cr7post from "./../../Image/cr7post.jpg" ; 
import cr7Pic from "./../../Image/cr7.jpg" ;
import monaPost from "./../../Image/monaPost.jpg" ;  
import messiPost from "./../../Image/messiPost.jpg" ; 
import hanaPost from "./../../Image/hanaPost.jpg" ; 





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

    const allPosts = [
      {
        title : "Mohamed Salah" ,
        data : "Yesterday at 9:00 AM " , 
        caption : "Star not in the sky" , 
        profileImage : mohamedPic , 
        postImage  : salehPic ,
        likes : "200K" , 
        share : '10K' , 
        comment :'40K' 
      } , 
      {
        title : "Cristiano Ronaldo" ,
        data : "just now ." , 
        caption : "Até ao fim, Portugal!!!" , 
        profileImage : cr7Pic , 
        postImage  : cr7post ,
        likes : "Mohamed Saleh and 600K others" , 
        share : '2K' , 
        comment :'110K' 
      } ,
      {
        title : "Mona Zaki" ,
        data : "45 minute ago ." , 
        caption : "Hey!" , 
        profileImage : mona , 
        postImage  : monaPost ,
        likes : "34K" , 
        share : '1K' , 
        comment :'10K' 
      } , 
  
      {
        title : "Leo Messi" ,
        data : "20 minute ago ." , 
        caption : "Hey!" , 
        profileImage : messi , 
        postImage  : messiPost ,
        likes : "Cristiano Ronaldo and 1M others" , 
        share : '100K' , 
        comment :'550K' 
      } , 
  
      {
        title : "Hana Elzahed" ,
        data : "1 day ago ." , 
        caption : "Welcome" , 
        profileImage : hana , 
        postImage  : hanaPost ,
        likes : "40K" , 
        share : '1K' , 
        comment :'4K' 
      } , 
  
    ]

  return (

    <Fragment>
    <div className='container'>

        <AsideComponent />

        <main className='main-content'>
            <StoryComponent />
            <WritePostComponent />
            <AllPostComponent allPosts={allPosts} />
        </main>

        <section className='sponser hide-mobile' style={{width : "350px"}}>
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

    </Fragment>
  )
}

export default HomePage
