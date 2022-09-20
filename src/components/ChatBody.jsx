import React from 'react'
import { IoVideocam, IoPersonAdd, IoEllipsisHorizontalSharp } from "react-icons/io5";
import MessageBox from './MessageBox';

function ChatBody() {
  return (
    <div className='chat'>
      <div className='chatheader'>
        <div>
          <span>Jane</span>
        </div>
        
        <div className="actions">
          <button><IoVideocam className='video'/></button>
           <button><IoPersonAdd className='addPerson' /></button>
           <button><IoEllipsisHorizontalSharp className='more' /></button>
           
        </div>
        </div>

      <div className='chatbody'>
        <div className='message'>
          <p>Message</p>
          </div>
        <div className='message'>
          <p>Message</p>
          </div>
        <div className='message'>
          <p>Message</p>
          </div>
        <div className='message'>
          <p>Message</p>
          </div>

        </div>

      <div className='chatfooter'>
        <MessageBox/>
        </div>
    </div>
  )
}

export default ChatBody