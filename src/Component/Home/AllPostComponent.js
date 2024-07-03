import React from 'react'
import PostComponent from '../Utility/PostComponent' ;




const AllPostComponent = ({allPosts}) => {


  return (
    <div className='all-post'>
        {
          allPosts.map((item , idx)=>{
            return <PostComponent key={idx} share={item.share} caption={item.caption} comment={item.comment} profileImage={item.profileImage} date={item.data} likes={item.likes}  postImage={item.postImage} title={item.title}  />
          })
        }


    </div>
  )
}

export default AllPostComponent
