import React from 'react'
import profilePic from './../../Image/profile.jpg' ; 
import MohamedSalahPic from "./../../Image/mohamedPost.jpg" ;
import "./../../Page/Home/homePage.css"
import mohamedPic from "./../../Image/mohamedProfile.jpg" ;
import halland from "./../../Image/halland.jpg" ; 
import hallandStory from "./../../Image/hallandStory.jpg" ; 
import gorg from "./../../Image/gor.jpg" ;
import gorgStory from "./../../Image/gorStory.jpg" ;


const StoryComponent = () => {
    return (
        <div className='story'>
            <div className='type'>
                <button className='active'> <i className="fa-solid fa-book-open" style={{marginRight : "7px"}}></i> Stories</button>
                <button style={{display : 'flex' , alignItems :"center" , justifyContent : 'center'}} > <span className="material-symbols-outlined" style={{marginRight :"7px"}} >smart_display</span> Reels</button>
            </div>

            <div className='stories'>
                <div className='default-card'>
                    <div className='image'>
                        <img alt='story' src={profilePic} />
                        <span className='x-icon'><i class="fa-solid fa-plus"></i></span>
                    </div>
                    <div className='text'>
                        Create Story
                    </div>
                </div>

                <div className='card' > 
                    <div clasName="image" style={{position :"relative"}}>
                        <img alt='prof' className='story-profile' loading='lazy' src={mohamedPic} />
                        <div className="over"></div>
                        <h4 className='story-name'>Mohamed Salah</h4>
                        <img alt='story' className='photo-story' loading='lazy' src={MohamedSalahPic} />
                    </div>
                </div>

                <div className='card' > 
                    <div clasName="image" style={{position :"relative"}}>
                        <img alt='prof' className='story-profile' loading='lazy' src={halland} />
                        <div className="over"></div>
                        <h4 className='story-name'>Erling Haaland                         </h4>
                        <img alt='story' className='photo-story' loading='lazy' src={hallandStory} />
                    </div>
                </div>

                <div className='card' > 
                    <div clasName="image" style={{position :"relative"}}>
                        <img alt='prof' className='story-profile' loading='lazy' src={gorg} />
                        <div className="over"></div>
                        <h4 className='story-name'>Georgina Rodríguez                         </h4>
                        <img alt='story' className='photo-story' loading='lazy' src={gorgStory} />
                    </div>
                </div>


                
                
            </div>

        </div>
    )
}

export default StoryComponent
