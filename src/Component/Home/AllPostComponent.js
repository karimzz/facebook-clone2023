import React from 'react'
import PostComponent from '../Utility/PostComponent' ;
import mohamedPic from "./../../Image/mohamedPost.jpg" ; 
import salehPic from "./../../Image/442437449_1053366222815001_3003621214341094569_n.jpg"
import cr7post from "./../../Image/cr7post.jpg" ; 
import cr7Pic from "./../../Image/cr7.jpg" ;
import mona from "./../../Image/mona zaki.jpg" ;  
import monaPost from "./../../Image/monaPost.jpg" ;  
import messi from "./../../Image/messi.jpg" ; 
import messiPost from "./../../Image/messiPost.jpg" ; 
import hana from "./../../Image/hana.jpg" ; 
import hanaPost from "./../../Image/hanaPost.jpg" ; 



const AllPostComponent = () => {

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
      likes : "600K" , 
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
      likes : "1M" , 
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
