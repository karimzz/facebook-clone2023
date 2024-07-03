import React from 'react' ; 
import "./profile.css" ;
import ProfileHeadComponent from '../../Component/Profile/ProfileHeadComponent';
import ProfileMain from '../../Component/Profile/ProfileMain';



const ProfilePage = () => {
  
  return (
    <div>
        <ProfileHeadComponent />
        <ProfileMain />
    </div>
  )
}

export default ProfilePage
