import React from 'react' ; 
import careReact from "./../../Image/11820030.png" ; 
import monaPic from "./../../Image/mona zaki.jpg" ;
import commentIcon from "./../../Image/facebook (1).png"
import wowReact from "./../../Image/11820302.png" ;
import angryReact from "./../../Image/11819998.png" ;
import messiPic from "./../../Image/messi.jpg" ; 
import cr7 from "./../../Image/cr7.jpg" ; 
import gorgPic from "./../../Image/gor.jpg" ; 
import requeestPic from "./../../Image/11820201.png" ; 
import tamerPic from "./../../Image/416109372_930040295159318_663725636752314940_n.jpg" ; 
import markPic from "./../../Image/mark.jpg" ; 
import hanaPic  from "./../../Image/hana.jpg" ; 
import NotificationComponent from './NotificationComponent';


const AllNotificationComponent = () => {

    const allNotification = [
        {
            title : "Mona Zaki" , 
            des : "reacted your photo" , 
            image  : monaPic , 
            subImage : careReact , 
            date : "1 day ago"
        } , 
        {
            title : "Lionel Messi" , 
            des : "reacted your cover" , 
            image  : messiPic , 
            subImage : wowReact , 
            date : "just now"
        },
        {
            title : "Cristiano Ronaldo" , 
            des : "reacted your photo" , 
            image  : cr7 , 
            subImage : careReact , 
            date : "2 minute ago"
        },
        {
            title : "Mark Zuckerberg" , 
            des : "reacted your photo" , 
            image  : markPic , 
            subImage : careReact , 
            date : "1 hour ago"
        } , 
        {
            title : "Tamer Hosny" , 
            des : "sent you a friend request" , 
            image  : tamerPic , 
            subImage : requeestPic , 
            date : "1 hour ago"
        },

        {
            title : "Hannah Elzahed" , 
            des : "reacted your video" , 
            image  : hanaPic , 
            subImage : careReact , 
            date : "1 hour ago"
        },

        {
            title : "Georgina Rodríguez" , 
            des : "reacted your photo" , 
            image  : gorgPic , 
            subImage : angryReact , 
            date : "5 hour ago"
        }

        
    ] ; 

  return (
    <div className='all-not'>

        <div className='all-chat-head'>
            <h3>Notifications</h3>
            <p className='dot-icon'><span className="material-symbols-outlined">more_horiz</span></p>
        </div>

        <div className='type-not'>
            <button className='active-not'>All</button>
            <button>Unread</button>
        </div>

        <div className='titles'>
            <p>Earlier</p>
            <a href='f' >See all</a>
        </div>

        <div className='all-notification'>

            {
                allNotification.map((item , idx)=>{
                    return <NotificationComponent key={idx} title={item.title} des={item.des} date={item.date} image={item.image} subImage={item.subImage} />
                })
            }
        </div>

    </div>
  )
}

export default AllNotificationComponent
