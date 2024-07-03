import React from 'react'
import ProfileAside from './ProfileAside'
import ProfilePosts from './ProfilePosts'
import PostComponent from '../Utility/PostComponent' ;
import mohamedPic from "./../../Image/mohamedPost.jpg" ; 
import salehPic from "./../../Image/442437449_1053366222815001_3003621214341094569_n.jpg"
import cr7post from "./../../Image/cr7post.jpg" ; 
import cr7Pic from "./../../Image/cr7.jpg" ;
import mona from "./../../Image/mona zaki.jpg" ;  
import monaPost from "./../../Image/monaPost.jpg" ;  
import messi from "./../../Image/messi.jpg" ; 
import messiPost from "./../../Image/messiPost.jpg" ; 
import hanaPost from "./../../Image/hanaPost.jpg" ; 
import profilePic from "./../../Image/profile.jpg"
import pic1 from "./../../Image/profile.jpg"
import pic2 from "./../../Image/karim8.jpg"
import pic3 from "./../../Image/karim9.jpg"
import pic4 from "./../../Image/karim10.jpg"
import pic5 from "./../../Image/karim11.jpg"





const ProfileMain = () => {

  const allPosts = [
    {
      title : "Karim Mohamed" ,
      data : "Yesterday at 9:00 AM " , 
      caption : "hello" , 
      profileImage : profilePic , 
      postImage  : pic1 ,
      likes : "400K" , 
      share : '10K' , 
      comment :'40K' 
    } , 
    {
      title : "Karim Mohamed" ,
      data : "just now ." , 
      caption : "Até ao fim, Portugal!!!" , 
      profileImage : profilePic , 
      postImage  : pic2 ,
      likes : "600K" , 
      share : '2K' , 
      comment :'110K' 
    } ,
    {
      title : "Karim Mohamed" ,
      data : "45 minute ago ." , 
      caption : "Hey!" , 
      profileImage : profilePic , 
      postImage  : pic3 ,
      likes : "34K" , 
      share : '1K' , 
      comment :'10K' 
    } , 

    {
      title : "Karim Mohamed",
      data : "20 minute ago ." , 
      caption : "Look! who are gradudated" , 
      profileImage : profilePic , 
      postImage  : pic4 ,
      likes : "1M" , 
      share : '100K' , 
      comment :'550K' 
    } , 

    {
      title : "Karim Mohamed" ,
      data : "1 day ago ." , 
      caption : "Welcome" , 
      profileImage : profilePic , 
      postImage  : pic5 ,
      likes : "40K" , 
      share : '1K' , 
      comment :'4K' 
    } , 

  ]

  return (
    <section className='profile-main .profile-container'>
        <ProfileAside />
        <ProfilePosts allPosts={allPosts} />
    </section>
  )
}

export default ProfileMain
