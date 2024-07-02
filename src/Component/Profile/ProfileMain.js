import React from 'react'
import ProfileAside from './ProfileAside'
import ProfilePosts from './ProfilePosts'

const ProfileMain = () => {
  return (
    <section className='profile-main .profile-container'>
        <ProfileAside />
        <ProfilePosts />
    </section>
  )
}

export default ProfileMain
