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
import { Skeleton } from '@mui/material';


const PostLoaddingComponent = ({title , caption , profileImage , date , likes , share , comment , postImage}) => {

    const [react , setReact] = useState('idle')  // LIKE || LOVE || CARE || WOW || SAD || ANGRY

    // For Control modal info
    const [showModal , setShowModal] = useState(false); 

  return (
    <div className='post-component' >



        <div className='post-head'>
            <div className='owner'>
                    <p>
                    <Skeleton variant="circular" width={40} height={40} />

                    </p>
                <div className='titles'>
                    <h3> 
                        <a  href='/'><Skeleton width={106} variant="text" sx={{ fontSize: '1rem' }} />  </a>  
                    </h3>
                    <p className='date'> 
                        <a  href='/'><Skeleton width={115} variant="text" sx={{ fontSize: '1rem' }} />  </a>   
                    </p>
                </div>
            </div>
            <div className='options'>
                <span class="material-symbols-outlined">
                more_horiz
                </span>
            </div>
        </div>

        <div className='post-caption'>
            
        </div>

        <div className='post-image' style={{height : "220px"}}>

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
                <Skeleton style={{borderRadius : "6px"}} variant="rectangular" border width={70} height={10} />

            </div>

            <div className='opt'>
                <Skeleton style={{borderRadius : "6px"}} variant="rectangular" border width={70} height={10} />

            </div>



            <div className='opt'>
                <Skeleton style={{borderRadius : "6px"}} variant="rectangular" border width={70} height={10} />

            </div>




        </div>

    </div>
  )
}

export default PostLoaddingComponent
