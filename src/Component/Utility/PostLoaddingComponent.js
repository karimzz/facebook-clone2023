import React from 'react'

import { Skeleton } from '@mui/material';


const PostLoaddingComponent = ({title , caption , profileImage , date , likes , share , comment , postImage}) => {


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
