
import React from 'react'
import profilePic from './../../Image/profile.jpg' ; 
import frinedPic from "./../../Image/friends.png" ; 
import feeds from "./../../Image/3dN1QwOLden.png"
import addsPic from "./../../Image/Ads.png" ; 
import climateScience from "./../../Image/Climate.png" ; 
import crisisPic from "./../../Image/crisis.png" ; 
import Messnger from "./../../Image/messenger.png" ; 
import MessengerKids from "./../../Image/messengerKids.png" ; 
import paymentPic from "./../../Image/wallet.png" ; 
import videoPic from "./../../Image/Reels.png"
import GalleryPic from './../../Image/Gallery.png' ;
import ball from './../../Image/ball.png' ;  
import chess from "./../../Image/ches.jpg" ; 
import god from "./../../Image/download.jpeg"
import fortunite from "./../../Image/fortunite.jpg"

const AsideComponent = () => {
  return (
    <aside>
            <div className='tools'>
                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Karim Mohamed</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={frinedPic} />
                        <p >Frineds</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Events</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={feeds} />
                        <p >Feeds</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Groups</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={addsPic} />
                        <p >Add center</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Ads Manager</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Blood Donation</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={climateScience} />
                        <p >Climate Scinece Center</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={crisisPic} />
                        <p >Crisis response</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Fundraisers</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p>Gaming Video </p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Memories</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={Messnger} />
                        <p >Messenger </p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={MessengerKids} />
                        <p >Messenger Kids</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={paymentPic} />
                        <p >Orders and Payment </p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Pages </p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={GalleryPic} />
                        <p >Recent and activity</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={profilePic} />
                        <p >Saved </p>
                    </a>
                </div>


                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={videoPic} />
                        <p >Video</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <p className='arrup'><span class="material-symbols-outlined">
                        expand_less
                        </span></p>
                        <p >See more</p>
                    </a>
                </div>



                <div className='shortcut'>
                    <div className='title'> 
                        <h2>Your shortcuts</h2>
                        <button className='btn-edite'>Edite</button>
                    </div>

                    <div className='item'>
                        <a href='/'>
                            <img src={ball} alt='game' loading='lazy' />
                            <p >8 Ball Pool</p>
                        </a>
                    </div>

                    <div className='item'>
                        <a href='/'>
                            <img src={chess} alt='game' loading='lazy' />
                            <p >Chess</p>
                        </a>
                    </div>

                    <div className='item'>
                        <a href='/'>
                            <img src={god} alt='game' loading='lazy' />
                            <p >God Of War</p>
                        </a>
                    </div>

                    <div className='item'>
                        <a href='/'>
                            <img src={fortunite} alt='game' loading='lazy' />
                            <p >Fortunite</p>
                        </a>
                    </div>

                    
                </div>

                <div className='foot'>
                    <a href='/'>Privacy</a>
                    <a href='/'>Terms</a>
                    <a href='/'>Advertising</a>
                    <a href='/'>Ad choices</a>
                    <a href='/'>Cookies</a>
                    <a href='/'>More</a>
                    <span className='copy'>More Meta &copy; 2023</span>
                </div>

                
            </div>
        </aside>
  )
}

export default AsideComponent
