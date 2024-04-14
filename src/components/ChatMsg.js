import React from 'react'
import user from '../assets/user.svg'

const ChatMsg = ({name,message}) => {
  return (
    <div className='flex shadow-sm items-center p-2 hover:bg-slate-50 '>
        <div>

        <img className='h-8 m-2' src={user} alt="user" />
        </div>
        <div className='flex items-center'>
            <span className=' px-2 items-center font-bold'>{name}</span>
            <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMsg