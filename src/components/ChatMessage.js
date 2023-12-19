import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ChatMessage = ({name, message}) => {
  return (
    
    <div className=' flex items-center'>
          <FontAwesomeIcon icon={faUserCircle} color="white" className="text-xl p-2 " />
          <span className='p-2 font-bold'>{name}</span>
          <span className='p-2'>{message}</span>
        </div>
    
  )
}

export default ChatMessage