import React from 'react'
import { IoAttachOutline } from "react-icons/io5";

function MessageBox() {
  return (
    <div className='messageBox'>
      <input type="text" placeholder='Enter message' />
      <div className="actions">
        <label className='attach' htmlFor="attachment">
          <IoAttachOutline className='attach' />
        <input id='attachment' hidden type="file" />
        </label>
        {/* <button className='icon'><IoImage className='happy' /></button> */}
        
        <button className='send'>Send</button>
      </div>
      
    </div>
  )
}

export default MessageBox