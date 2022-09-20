import React from 'react'
import ChatBody from '../components/ChatBody'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className='chat-wrapper'>
      <div className="container">
        <Sidebar/>
        <ChatBody/>
      </div>
    </div>
  )
}

export default Home