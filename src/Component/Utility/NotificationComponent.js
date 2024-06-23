import React from 'react'

const NotificationComponent = ({des , title , image , subImage , date}) => {
  return (
    <div className='card'>
    <div className='image'>
        <img className='profile-image' src={image} alt='ophp' />
        <img className='small-img' src={subImage} alt='ophp' />
    </div>
    <div className='details'>
        <div className='des'>
            <p className='title-pro'>{title}</p> {des}

        </div>
        <div className='date'>
            {date}
        </div>
    </div>
</div>
  )
}

export default NotificationComponent
