
import React, { Fragment, useState } from 'react'
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
import memory from "./../../Image/11820135.png"
import saved from "./../../Image/11820262.png"
import groups from "./../../Image/groups.png"
import video from "./../../Image/video.png"
import pages from "./../../Image/pages.png"
import market from "./../../Image/martket.png"
import game from "./../../Image/game.png"
import adds from "./../../Image/addds.png"
import recent from "./../../Image/recent.png"
import fund from "./../../Image/fund.png"




const AsideComponent = () => {

    // For Control See Featured 
    const [seeMore , setSeeMore] = useState(false) ; 

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
                        <img alt='phot' loading='lazy' src={memory} />
                        <p >Memories</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={saved} />
                        <p >Saved</p>
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
                        <img alt='phot' loading='lazy' src={groups} />
                        <p >Groups</p>
                    </a>
                </div>

                <div className='item'>
                    <a href='/'>
                        <img alt='phot' loading='lazy' src={video} />
                        <p >Video</p>
                    </a>
                </div>
                {
                    seeMore ? (
                        <Fragment>
                        <div className='item'>
                            <a href='/'>
                                <img alt='phot' loading='lazy' src={market} />
                                <p >Marketplace</p>
                            </a>
                        </div>
        
                        <div className='item'>
                            <a href='/'>
                                <img alt='phot' loading='lazy' src={adds} />
                                <p >Ads Manager</p>
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
                                <img alt='phot' loading='lazy' src={fund} />
                                <p >Fundraisers</p>
                            </a>
                        </div>
        
                        <div className='item'>
                            <a href='/'>
                                <img alt='phot' loading='lazy' src={game} />
                                <p>playing Game  </p>
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
                                <img alt='phot' loading='lazy' src={pages} />
                                <p >Pages </p>
                            </a>
                        </div>
        
                        <div className='item'>
                            <a href='/'>
                                <img alt='phot' loading='lazy' src={recent} />
                                <p >Recent and activity</p>
                            </a>
                        </div>
        
                        </Fragment>
                    ) : ""
                }

                {
                    seeMore ? (
                        <div className='item' onClick={()=>setSeeMore(false)}>
                        <a href='#'>
                        <p className='arrup'><span class="material-symbols-outlined">
                        expand_less
                        </span></p>
                        <p >See less</p>
                        </a>
                        </div>
                    ) :(
                        <div className='item' onClick={()=>setSeeMore(true)}>
                        <a href='#'>
                        <p className='arrup'><span class="material-symbols-outlined">
                        expand_more
                        </span></p>
                        <p >See more</p>
                        </a>
                        </div>
                    )
                }







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
