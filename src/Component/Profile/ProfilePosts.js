import React from 'react'
import WritePostComponent from '../Home/WritePostComponent'
import AllPostComponent from '../Home/AllPostComponent'

const ProfilePosts = ({allPosts}) => {
  return (
    <div className='my-profile-timeline'>
      <WritePostComponent type={'profile'} />
      <AllPostComponent allPosts={allPosts} />
    </div>
  )
}

export default ProfilePosts
