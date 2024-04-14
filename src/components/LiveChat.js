import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, generateRandomText } from '../utils/helper'

// const messages = [
//     {
//         name:"Yash Tiwari",
//         message:"Hello Chat"
//     },
//     {
//         name: "Akash",
//         message: "Hi Yash"
//     }
// ]

const LiveChat = () => {
    const [livemsg,setLivemsg]= useState("")
const dispatch = useDispatch();
const chatMessages = useSelector(store => store.chat.messages)
    useEffect(()=> {
                const i = setInterval(()=> {
                // console.log("APi Polling");
                dispatch(addMessage({
                    name:generateRandomName(),
                    message:generateRandomText(20)

                }))

                // messages.map((msg)=>  {
                //     dispatch(addMessage({
                   
                //         name:msg.names,
                //         message: msg.message
                    
                   

                // }));
                // });
                }, 1000)

                return ()=> clearInterval(i);
    },[])
  return (
    <div className='ml-2 w-full h-[600px]  border flex flex-col items-center justify-center text-center  border-black bg-slate-100 rounded-lg'>
      <h1 className='bg-white mt-0 p-2 m-0 font-bold items-center w-full rounded-lg '>Live Chat</h1>
    <div className= 'ml-2 w-full h-[550px] m-2 overflow-y-scroll flex   flex-col-reverse'>
        {chatMessages.map((message)=> (<ChatMsg name={message.name} message={message.message}/>))}
      

    </div>
    <div className='w-full  flex  justify-start items-start text-left '>
    <form action="" className=' w-full rounded-lg' onSubmit={(e)=>{
        
        e.preventDefault()

        dispatch(
            addMessage({
                    name: "Yash Tiwari",
                    
                    message: livemsg,
            }),
        )
                setLivemsg("")
                }
        
        }>
        <input className=' w-[80%] ml-2 mb-2 p-2 rounded-lg px-5' type="text" name="" value={livemsg}  onChange={(e)=> setLivemsg(e.target.value)} placeholder='Chat' id="" />
        <button className='bg-green-200 p-2 rounded-lg ml-2 font-bold text-green-500'>Submit</button>
    </form>
    </div>
    
    </div>
  )
}

export default LiveChat