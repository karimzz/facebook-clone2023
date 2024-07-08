import React from 'react'
import userPic from "./../../Image/cover.jpg" ; 
import pic from "./../../Image/profile.jpg" ;
import cr7 from "./../../Image/cr7.jpg" ;
import mona from "./../../Image/mona zaki.jpg" ; 
import hana from "./../../Image/hana.jpg" ;   
import cameraPic from "./../../Image/camera.png" ; 
import gorPic from "./../../Image/gor.jpg"
import insPic from "./../../Image/halland.jpg" ; 
import veirified from "./../../Image/verified.png"

const ProfileHeadComponent = () => {
  return (
    <div className='profile-head'>
        <div className='cover-photo'>
            <div className='image'>
                <img src={userPic} alt='cover' loading='lazy' />
                <button className='add-photo-btn'> <span style={{marginRight : "0px"}} className="material-symbols-outlined">
                photo_camera
                </span> <span className='hide-mobile'>Edit cover photo</span></button>
            </div>
            
        </div>

        <div className='profile-info profile-container'>
            <div className='left'>
                <div className='image'>
                    <img src={pic } alt='profile' />
                    <img  className='add-photo' src={cameraPic} alt='camera' />
                </div>
                <div className='info'>
                    <h2>Karim Mohamed <img style={{width : "16px" , height : "16px"}} src={veirified}  alt='vei'/> </h2>
                    <p className='num-frined'>1K friends</p>
                    <div className='friends'>
                        <div className='images'>
                            <img src={insPic} alt='' />
                            <img src={cr7} alt='' /> 
                            <img src={mona} alt='' />
                            <img src={gorPic} alt='' />
                            <img src={hana} alt='' />
                        </div>
                        <div className='text'>
                            <button className="btn-act btn-same-re btn-normal" > <span className="material-symbols-outlined">add</span> Add story</button>
                            <button className="btn-back btn-normal btn-same-re" > <span className="material-symbols-outlined">edit</span> Edite profile</button>
                            <button className='btn-back btn-normal'><i className="fa-solid fa-chevron-down"style={{fontWeight : "bold"}} ></i></button>
                        </div>
 
                    </div>
                </div>
            </div>
            <div className='profile-head-footer '>
                <div className='tabs'>
                    <div className='tab active'>Posts</div>
                    <div className='tab'>About</div>
                    <div className='tab hide-mobile'>Frineds</div>
                    <div className='tab hide-mobile'>Photos</div>
                    <div className='tab hide-mobile'>Videos</div>
                    <div className='tab hide-mobile'>Check-ins</div>
                    <div className='tab'>More <i className="fa-solid fa-caret-down"></i> </div>
                </div>
                <div className='option'>
                    <button><i className="fa-solid fa-ellipsis"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeadComponent
