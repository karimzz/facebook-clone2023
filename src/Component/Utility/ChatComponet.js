import React from 'react'
import pic from "./../../Image/mona zaki.jpg"

const ChatComponet = ({image , username , lastSeen , message}) => {
  return (
    <div  className='chat-nav'>
        <div className='prof'>
            <img src={image} alt='pic' loading='lazy' />
        </div>
        <div className='info'>
            <div className='title'>{username}</div>
            <div className='last-message'>{message === 'Missed Call' ? message : <div className='n-message'>{message}</div>} <span className='time'>{lastSeen ==='just now' ?<h4 style={{display : "inline" , color:"black"}}>{lastSeen} </h4> : lastSeen}</span></div>
        </div>

    </div>
  )
}

export default ChatComponet
