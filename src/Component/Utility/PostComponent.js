import React, { Fragment, useState } from 'react'
import reactSad from "./../../Image/11820230.png" ; 
import reactCare from "./../../Image/11820030.png" ; 
import reactWow from "./../../Image/11820302.png" ;
import reactLike from "./../../Image/facebook-reactions.png" ;
import reactLove from "./../../Image/thumbs-up.png" ;
import veriefied from "./../../Image/verified.png" 
import reactAngry from "./../../Image/11819998.png"  ;
import earthPic from "./../../Image/earth.webp"  ;
import sharePic from "./../../Image/share.png"  ;

const PostComponent = ({title , caption , profileImage , date , likes , share , comment , postImage}) => {

    const [react , setReact] = useState('idle')  // LIKE || LOVE || CARE || WOW || SAD || ANGRY


  return (
    <div className='post-component'>

        <div className='post-head'>
            <div className='owner'>
                <img src={profileImage} alt='profile' />
                <div className='titles'>
                    <h3> <a  href='/'>{title}  </a> <img style={{width :"14px" , height : "14px"}} src={veriefied} alt='veridied' /> </h3>
                    <p className='date'>{date} .<img src={earthPic} alt='earth' /></p>
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

        <div className='reaction' >
            <div className='opt'style={{padding : "5px 12px"}}>
                <div className='like-option'>
                    <img onClick={()=>setReact('LIKE')}  src={reactLike} alt='react' />
                    <img onClick={()=>setReact("LOVE")} src={reactLove} alt='react' />
                    <img onClick={()=>setReact("WOW")} src={reactWow} alt='react' />
                    <img onClick={()=>setReact("CARE")} src={reactCare} alt='react' />
                    <img onClick={()=>setReact("SAD")} src={reactSad} alt='react' />
                    <img onClick={()=>setReact("ANGRY")} src={reactAngry} alt='react' />
                </div>
                {
                    react ==='idle' ? 
                    <Fragment><i className="fa-regular fa-thumbs-up"></i>Like</Fragment> : 
                    react === 'LIKE' ?
                    <Fragment><span className='like'><img alt='like' src={reactLike} /> Like</span></Fragment> :
                    react === 'LOVE' ?
                    <Fragment><span className='love'><img alt='love' src={reactLove} /> Love</span></Fragment> :
                    react === 'WOW' ?
                    <Fragment><span className='wow'><img alt='wow' src={reactWow} /> Wow</span></Fragment> :
                    react === 'SAD' ?
                    <Fragment><span className='sad'><img alt='wow' src={reactSad} /> Sad</span></Fragment> :
                    react === 'CARE' ?
                    <Fragment><span className='sad'><img alt='wow' src={reactCare} /> Care</span></Fragment> :
                    react === 'ANGRY' ?
                    <Fragment><span className='angry'><img alt='wow' src={reactAngry} /> Angry</span></Fragment> :
                    ""
                }
            </div>

            <div className='opt'>
                <i  className="fa-regular fa-comment"></i>
                Comment
            </div>

            <div className='opt'>
            <i class="fa-brands fa-whatsapp"></i>
            Send
            </div>

            <div className='opt'>
                <img src={sharePic} alt='share' className='share-icon' /> 
                Share
            </div>




        </div>

    </div>
  )
}

export default PostComponent
