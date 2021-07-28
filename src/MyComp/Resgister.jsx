import React, { useRef } from 'react'
import './styles/register.scss'
import { Link } from 'react-router-dom'

export const Register = () => {



    const pwdRef = useRef()
    const nameRef = useRef()

    const handleRegister = (e) => {
        e.preventDefault()


        const userData = JSON.parse(localStorage.getItem(nameRef.current.value))

        userData
            ?
            userData.pwd === pwdRef.current.value
                ?
                window.location.href = '/home'
                : alert('password is wrong !!')
            :
            alert('dont have account  with this name !!')


    }


    // useEffect(() => {

    // }, [name, email])

    return (
        <div className='register'>

            <div className="top">
                <img
                    className='logo'
                    src='logo.png'
                    alt='d' />
                <button className="loginBtn">Login In</button>
            </div>

            <div className="container">
                <h1>Unlomited movies 18+ 19 390++ al plus , Tv shows and more  contenr</h1>
                <h2>Watch anywhrre anytime kabhi bhi alhabibi</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ipsa corporis optio odio fugit accusamus dignissimos possimus velit rerum! Neque alias sequi ab doloremque quia, quis voluptates delectus libero expedita dolorum accusamus eaque.</p>


                <div id="inputFields" >

                    <input type="text" placeholder='Enter your Name....' name='name' ref={nameRef} />
                    <input type="password" placeholder='Enter strong Password....' name='pwd' ref={pwdRef} />
                    <button className='btn btn-primary mt-1' onClick={handleRegister}>Login</button>
                </div>

                <div className='info'>
                    <Link>Forget password ?  </Link>
                    <b >
                        <span className='text-danger px-1'>don't have account ? Click to this </span>
                        <Link to='/signIn'>Create Account</Link>
                    </b>
                </div>

            </div>
        </div>
    )
}
