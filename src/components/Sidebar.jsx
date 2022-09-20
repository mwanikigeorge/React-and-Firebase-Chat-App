import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chatlist from './ChatList'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chatlist/>
    </div>
  )
}

export default Sidebar