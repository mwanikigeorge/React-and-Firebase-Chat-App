import React from 'react'

function Login() {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">George chat</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email'  />
                <input type="password" placeholder='password'  />
                <button>Sign in</button>
            </form>
            <p>Dont you have an account? Register</p>
        </div>
    </div>
  )
}

export default Login