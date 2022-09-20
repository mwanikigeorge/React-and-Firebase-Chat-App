import React from 'react'
import { IoImageOutline } from "react-icons/io5";

function Register() {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">George chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='username'  />
                <input type="email" placeholder='email'  />
                <input type="password" placeholder='password'  />
                <input hidden id="avatar" type="file" />
                <label htmlFor="avatar">
                    <IoImageOutline className='avatar-icon'/>
                    <span>Choose an image</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Register