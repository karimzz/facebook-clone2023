import React from 'react'
import profilePic from "./../../Image/profile.jpg" ;
import videoPic from "./../../Image/11820294.png";
import galleryPic from "./../../Image/Ivw7nhRtXyo.png";
import feelPic from"./../../Image/Y4mYLVOhTwq.png"
import eventPic from"./../../Image/event.png"


const WritePostComponent = ({type}) => {
  return (
    <div className='write-post' style={{marginTop : type ==='profile' ? "2px" : "20px"}}>
        <div className='write-body'>
            <a href='dsf'> <img src={profilePic} alt='profile' /> </a>
            <div> <input placeholder={`What's on your mind , Karim ?`} /></div>
        </div>

        <div className='write-option'>

            <div className='card'>
                <img src={videoPic} alt='video' /> Live video
            </div>

            <div className='card'>
                <img style={{width : "23px" , height : "23px"}} src={galleryPic} alt='video' /> Photo/video
            </div>



            {
                type === 'profile' ? 
                (
                    <div className='card hide-mobile'>
                        <img style={{width : "23px" , height : "23px"}} src={eventPic} alt='video' /> Life event
                    </div>
                ) : (
                    <div className='card hide-mobile'>
                        <img style={{width : "23px" , height : "23px"}} src={feelPic} alt='video' /> Feeling/activity
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default WritePostComponent
