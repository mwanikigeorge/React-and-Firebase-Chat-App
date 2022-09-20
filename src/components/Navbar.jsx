import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>George Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="avatar" />
            <span>George</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar