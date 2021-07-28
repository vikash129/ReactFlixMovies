import React, { useRef } from 'react'
import './styles/signIn.scss'
import { Link } from 'react-router-dom'

export const SignIn = () => {

    const emailRef = useRef()
    const pwdRef = useRef()
    const nameRef = useRef()

    const handleSignIn = (e) => {
        e.preventDefault()
       

        localStorage.setItem(nameRef.current.value, JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            pwd: pwdRef.current.value
        }))

        window.location.href = '/home'
    }

    return (
        <div style={{
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            background: 'url(logo.png)',
        }}>
            <div className='signIn'>

                <div className="text-dark font-size-20 font-weight-500"><h3>Create Account</h3></div>



                <form id="inputFields" >

                    <input type="text" placeholder='Enter your Name....' name='name' ref={nameRef} />
                    <input type="password" placeholder='Enter strong Password....' name='pwd' ref={pwdRef} />
                    <input type="email" placeholder='Enter your Email....' name='email' ref={emailRef} />
                    <button className='btn btn-primary my-3 w-60 border-radius-5 bg-primary' onClick={handleSignIn}>Create Account</button>

                </form>


                <span className='info'>
                    <b>If you have account . So click to this <Link to='/'>Login</Link> </b>
                    <p>The captcha is made by googlie and all authentication</p>
                </span>
            </div>
        </div>
    )
}
