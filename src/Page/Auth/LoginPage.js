import React from 'react' ; 
import "./login.css" ; 
import facebookLogo from "./../../Image/facebook.svg" ; 

const LoginPage = () => {
    return (
        <div className='login-main'>
            <div className='login-container'>
                <div className='fb-form'>
                    <img src={facebookLogo} alt='facebook' />
                    <form>
                        <p>Log in to Facebook</p>
                        <input type='email' placeholder='Email address or phone number' />
                        <input type='password' placeholder='Password' />
                        <button type='submit' className='btn-log'>Log in</button>
                        <a className='forget-password' href='/forget'>Forgotten account?</a>
                        <p className='line'> or</p>
                        <button className='btn-cre'>Create new account </button>
                    </form>
                </div>
            </div>
            <div className='fb-bottom'>
                <p className='lang'>English (UK)</p>
                <p className='lang'>العربية </p>
                <p className='lang'>Français (France) </p>
                <p className='lang'>italiano </p>
                <p className='lang'>Deutsch </p>
                <p className='lang'>Русский </p>
                <p className='lang'>Español  </p>
                <p className='lang'>Bahasa Indonesia  </p>
                <p className='lang'>Türkçe  </p>
                <p className='lang'>Português (Brasil)  </p>
                <p className='lang'>हिन्दी   </p>
            </div>
        </div>
    )
}

export default LoginPage
