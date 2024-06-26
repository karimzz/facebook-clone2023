import React from 'react'
import mohamedPic from "./../../Image/mohamedPost.jpg" ; 
import salehPic from "./../../Image/442437449_1053366222815001_3003621214341094569_n.jpg"
import reactSad from "./../../Image/11820230.png" ; 
import reactCare from "./../../Image/11820030.png" ; 
import reactWow from "./../../Image/11820302.png" ;
import reactLike from "./../../Image/facebook-reactions.png" ;
import reactLove from "./../../Image/thumbs-up.png" ;
import veriefied from "./../../Image/verified.png" 

const PostComponent = ({title , caption , profileImage , date , likes , share , comment , postImage}) => {
  return (
    <div className='post-component'>

        <div className='post-head'>
            <div className='owner'>
                <img src={profileImage} alt='profile' />
                <div className='titles'>
                    <h3> <a  href='/'>{title}  </a> <img style={{width :"14px" , height : "14px"}} src={veriefied} alt='veridied' /> </h3>
                    <p className='date'>{date}</p>
                </div>
            </div>
            <div className='options'>
                <span class="material-symbols-outlined">
                more_horiz
                </span>
            </div>
        </div>

        <div className='post-caption'>
            {caption}
        </div>

        <div className='post-image'>
            <img src={postImage} alt='pho' />
        </div>

        <div className='reacts'>
            <div className='react'>
                <div className='icons'> <img src={reactCare} alt='react' /> <img src={reactWow} alt='rea' />  </div>
                <div className='num'>{likes}</div>
            </div>
            <div className='share'>
                <div className='comment num'>{comment} <i class="fa-solid fa-comment"></i></div>
                <div className='comment num'>{share} <i class="fa-solid fa-share"></i></div>
            </div>
        </div>

        <div className='reaction'>
            <div className='opt'>
                <div className='like-option'>
                    <img src={reactLike} alt='react' />
                    <img src={reactLove} alt='react' />
                    <img src={reactWow} alt='react' />
                    <img src={reactCare} alt='react' />
                    <img src={reactSad} alt='react' />
                </div>
                <i className="fa-regular fa-thumbs-up"></i>
                Like
            </div>

            <div className='opt'>
                <i className="fa-regular fa-comment"></i>
                Comment
            </div>

            <div className='opt'>
                <i class="fa-brands fa-whatsapp"></i>
                Send
            </div>

            <div className='opt'>
                <i class="fa-sharp fa-regular fa-share"></i> 
                Share
            </div>




        </div>

    </div>
  )
}

export default PostComponent
