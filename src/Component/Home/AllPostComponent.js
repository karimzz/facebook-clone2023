import React, { Fragment, useEffect, useState } from 'react'
import PostComponent from '../Utility/PostComponent' ;
import PostLoaddingComponent from '../Utility/PostLoaddingComponent';




const AllPostComponent = ({allPosts}) => {

  const [loadding, setLoadding] = useState(true) ; 

  useEffect(()=>{
    setTimeout(()=>{
      setLoadding(false)
    } , 1800)
  } , [])

  return (
    <div className='all-post' style={{maxWidth : "100%"}}>
    
        {
          !loadding ?  allPosts.map((item , idx)=>{
            return <PostComponent key={idx} share={item.share} caption={item.caption} comment={item.comment} profileImage={item.profileImage} date={item.data} likes={item.likes}  postImage={item.postImage} title={item.title}  />
          }) : (
            <Fragment>
              <PostLoaddingComponent />
              <PostLoaddingComponent />
              <PostLoaddingComponent />
              <PostLoaddingComponent />

            </Fragment>
          )
        }


    </div>
  )
}

export default AllPostComponent
