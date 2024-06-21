import React from 'react'

const OnlineChat = ({image , username}) => {
  return (
    <div className='online-item'>
        <div className='online-image'>
          <div className='online'></div>
          <img src={image} alt='profile' />
        </div>
        <h4>{username}</h4>
    </div>
  )
}

export default OnlineChat
