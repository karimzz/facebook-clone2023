import React from 'react'
import "./utility.css"
import menu from "./../../Image/11820105.png" ; 
import postimg from "./../../Image/11820064.png"
import ChatComponet from './ChatComponet';

import salah from "./../../Image/mohamedPost.jpg"

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


const AllChatComponent = () => {



    const onlineChat = [
        {
          username : "Mohamed Salah" , 
          image : salah , 
          lastSeen : '1m' , 
          message : "انتا فين"
        },
        {
          username : "Cristiano Ronaldo" , 
          image : cr7, 
          lastSeen : '10h', 
          message : "Missed Call"
        },      {
          username : "Mona Zaki" , 
          image : mona, 
          lastSeen : '4h', 
          message : "ازيك"
        },      {
          username : "Hana Elzahed" , 
          image : hana, 
          lastSeen : '3h', 
          message : "Missed Call"
        },      {
          username : "Gorgina Rodruigez" , 
          image : gor, 
          lastSeen : '23h', 
          message : "يعم ارحمني ورد"
        },      {
          username : "Ahmed Helmy" , 
          image : helmy, 
          lastSeen : '2d', 
          message : "Missed Call"
        }, {
          username : "Instgram" , 
          image : instgram, 
          lastSeen : '3m', 
          message : "Missed Call"
        },
        {
          username : "Twitter" , 
          image : twitter, 
          lastSeen : '45m', 
          message : "Missed Call"
        },
        {
          username : "Mark Zarkburg" , 
          image : mark, 
          lastSeen : '22m', 
          message : "Missed Call"
        },
        {
          username : "Leo Messi" , 
          image : messi, 
          lastSeen : '1w', 
          message : "Missed Call"
        },
        {
          username : "Erling Hanland" , 
          image : halland, 
          lastSeen : '1m', 
          message : "Missed Call"
        },
        {
          username : "Kevin De Bruyne " , 
          image : de, 
          lastSeen : '24h', 
          message : "Missed Call"
        }
        
      ]


  return (

        <section className='all-chat'>
            <div className='all-chat-head'>
                <h4>Chat</h4>
                <div className='icons-chat'>
                    <div>
                        <img src={menu} alt='phot' loading='lazy' />
                    </div>
                    <div>
                        <img src={postimg} alt='phot' loading='lazy' />
                    </div>
                    <div>
                        <span className="material-symbols-outlined">
                        fullscreen
                        </span>
                    </div>
                </div>
            </div>

            <div className='searchbar'>
                <span className="material-symbols-outlined">
                search
                </span>
                <input placeholder='Search Manager'  />
            </div>
            <div className='type-message'>
                <p>Inbox</p>
                <p>Communities</p>
            </div>
            <div className='chatss'>

            {
                onlineChat.map((item , idx)=>{
                    
                    return    <ChatComponet message={item.message} lastSeen={item.lastSeen} key={idx} username ={item.username} image={item.image} />
                    
                })
            }

            </div>

        </section>

  )
}

export default AllChatComponent
