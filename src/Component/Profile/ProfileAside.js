import React from 'react'
import lockPic from "./../../Image/11820212.png"
import userPic from "./../../Image/profile.jpg"
import pic1 from "./../../Image/download.jpeg"
import pic2 from "./../../Image/cover.jpg"
import karim1 from "./../../Image/karim1.jpg"
import karim2 from "./../../Image/karim2.jpg"
import karim3 from "./../../Image/karim3.jpg"
import karim4 from "./../../Image/karim4.jpg"
import karim5 from "./../../Image/karim5.jpg"
import karim6 from "./../../Image/karim6.jpg"
import karim7 from "./../../Image/karim7.jpg"
import cr7 from "./../../Image/cr7.jpg" ;
import mona from "./../../Image/mona zaki.jpg" ; 
import hana from "./../../Image/hana.jpg" ;   
import halland from "./../../Image/halland.jpg" ;   
import cameraPic from "./../../Image/camera.png" ; 
import insPic from "./../../Image/halland.jpg" ; 
import mohamedPic from "./../../Image/mohamedPost.jpg"
import AhmedPic from "./../../Image/ahmed.jpg"
import gorPic from "./../../Image/gor.jpg"
import twiitter from "./../../Image/twitter.jpg" ; 
import leoPic from "./../../Image/messi.jpg"

const ProfileAside = () => {
  return (
    <aside style={{height :"fit-content" , marginBottom : "20px"}} className='profile-aside'>

        <div className='lock-proifle'>
            <img src={lockPic} alt='loacked' />
            <div className='des'>
                <h4>You locked your profile </h4>
                <a href='/w'>Learn more</a>
            </div>
        </div>

        <div className='info-of-you'>
            <div className='section-title'>
                <h3>Intro</h3>
                <a href='/23' className='link'></a>
            </div>
            <button  className='aside-btn'>Add bio</button>

            <div className='past-work'>
                <div className='row'>
                    <div className='icon'><i className="fa-solid fa-graduation-cap"></i></div>
                    <div className='text'>Studies at <span>Faculty of Computers and Artificial Intelligence Helwan University</span></div>
                </div>
                <div className='row'>
                    <div className='icon'><i className="fa-solid fa-house-chimney"></i></div>
                    <div className='text'>Lives in <span>Cairo, Egypt</span></div>
                </div>
                <div className='row'>
                    <div className='icon'><i className="fa-solid fa-location-dot"></i></div>
                    <div className='text'>From <span>Cairo, Egypt</span></div>
                </div>
                <div className='row'>
                    <div className='icon'><i className="fa-solid fa-clock"></i></div>
                    <div className='text'>Joined August 2015</div>
                </div>
                <div className='row'>
                    <div className='icon'><i  className="fa-solid fa-wifi special-wi"></i></div>
                    <div className='text'>Followed by <span>1M people</span></div>
                </div>
                <div className='row'>
                    <div className='icon'><i className="fa-brands fa-instagram"></i></div>
                    <div className='text'> <span style={{color : "#0075FF" , fontWeight : "400"}}>Karimzz__</span></div>
                </div>
                <div className='row'>
                    <div className='icon'><i className="fa-brands fa-github"></i></div>
                    <div className='text'> <span style={{color : "#0075FF" , fontWeight : "400"}}>Karimzz__</span></div>
                </div>
                <div className='row'>
                    <div className='icon'><i className="fa-brands fa-linkedin"></i></div>
                    <div className='text'> <span style={{color : "#0075FF" , fontWeight : "400"}}>Karimzz__</span></div>
                </div>

            </div>

            <button  style={{margin: "3px 0px 14px"}} className='aside-btn'>Edit details</button>

            <div className='highlights'>
                <div className='card'>
                    <div className='image'>
                        <img src={userPic} alt='highlights' loading='lazy' />
                    </div>
                    <p className='title'>Best April</p>
                </div>
                <div className='card'>
                    <div className='image'>
                        <img src={pic1} alt='highlights' loading='lazy' />
                    </div>
                    <p className='title'>Best Game</p>
                </div>

                
            </div>

            <button  style={{margin: "14px 0px"}} className='aside-btn'>Edit featured</button>

        </div>

        <div className='all-photo'>
            <div className='section-title'>
                <h3>Photo</h3>
                <a href='/23' className='link'>See all photo</a>
            </div>
            <div className='photos'>
                <div className='photo'>
                    <img src={userPic} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim4} alt='img' />
                </div>
                <div className='photo'>
                    <img src={pic2} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim1} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim2} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim3} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim4} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim5} alt='img' />
                </div>
                <div className='photo'>
                    <img src={karim6} alt='img' />
                </div>
            </div>
        </div>

        <div className='all-frineds'>
        <div className='section-title'>
            <div>
                <h3>Frineds</h3>
                <p className='num-friends'>1000 frineds</p>
            </div>
            <a href='/23' className='link'>See all photo</a>
        </div>
        <div className='friends'>
            <div className='friend'>
                <div className='image'>
                    <img src={twiitter} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Twitter </h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={cr7} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={hana} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Hana El-Zahed</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={mona} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Mona Zaki</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={halland} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Erling Hanland</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={mohamedPic} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Mohamed Salah</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={AhmedPic} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Ahmed Helmy</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={gorPic} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Gorgina Rodruigez</h4>
                </div>
            </div>
            <div className='friend'>
                <div className='image'>
                    <img src={leoPic} alt='frineds' />
                </div>
                <div className='info'>
                    <h4>Leo Messi</h4>
                </div>
            </div>
        </div>
        </div>

        <div className='aside-footer'>
            <span><a href='/23'>Privacy</a> .</span>
            <span><a href='/23'>Terms</a> .</span>
            <span><a href='/23'>Advertising</a> .</span>
            <span><a href='/23'>Ad Choices</a> .</span>
            <span><a href='/23'>Cookies</a> .</span>
            <span><a href='/23'>More</a> .</span>
            <span><a href='/23'>Meta</a>  ©</span>
            <span><a href='/23'>2024</a> </span>
        </div>

    </aside>
  )
}

export default ProfileAside
